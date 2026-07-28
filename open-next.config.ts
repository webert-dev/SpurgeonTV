import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: async () => {
        const { KVCache } = await import(
          "@opennextjs/cloudflare/overrides/incremental-cache/kv-cache"
        );
        return new KVCache();
      },
    },
  },

  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
    },
  },
};

export default config;
