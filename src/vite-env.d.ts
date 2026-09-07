/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIXTURE_DELAY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
