import * as pulumi from "@pulumi/pulumi";
import * as command from "@pulumi/command";

const config = new pulumi.Config();

// Set via: cd infra && pulumi config set --secret netlifyToken <your-token>
const netlifyToken = config.requireSecret("netlifyToken");

const repoOwner = "thetillhoff";
const repoName  = "music-clone";
const siteName  = "blaskapelle-bad-wiessee";

const repoJson = JSON.stringify({
    provider: "github",
    repo: `${repoOwner}/${repoName}`,
    branch: "main",
    cmd: "hugo --minify",
    dir: "public",
    env: { HUGO_VERSION: "0.147.0" },
});

// Create Netlify site linked to the GitHub repo.
// Requires netlify-cli on the machine running `pulumi up`.
const site = new command.local.Command("netlify-site", {
    triggers: [repoJson, siteName],
    create: pulumi.interpolate`netlify api createSite \
        --data '{"name":"${siteName}","repo":${repoJson}}'`,
    // ponytail: looks up site by name at destroy time; site_id is a UUID from Netlify so safe to interpolate
    delete: pulumi.interpolate`SITE_ID=$(netlify api getSites 2>/dev/null \
        | node -e "const d=JSON.parse(require('fs').readFileSync(0,'utf8')); \
                   const s=d.find(x=>x.name===${JSON.stringify(siteName)}); \
                   process.stdout.write(s?s.id:'')"); \
        [ -n "$SITE_ID" ] && \
          netlify api deleteSite --data "{\"site_id\":\"$SITE_ID\"}" || [ -z "$SITE_ID" ]`,
    environment: {
        NETLIFY_AUTH_TOKEN: netlifyToken,
    },
});

const siteData = site.stdout.apply((out) => {
    if (!out) throw new Error("netlify api createSite returned empty output");
    try {
        return JSON.parse(out) as { id: string; ssl_url?: string; url: string };
    } catch (e) {
        throw new Error(`netlify api createSite returned non-JSON: ${String(out).slice(0, 200)}`);
    }
});

export const siteId  = siteData.apply((d) => d.id);
export const siteUrl = siteData.apply((d) => d.ssl_url ?? d.url);
