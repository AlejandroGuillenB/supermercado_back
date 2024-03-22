declare namespace NodeJS {
    interface ProcessEnv {
        DB_HOST: string;
        DB_PORT: number;
        DB_USER: string;
        DB_PASS: string;
        DB_NAME: string;
        DB_SYNC: boolean;
        DB_REJECT_UNAUTHORIZED: boolean;
        POSTGRES_PORT_EXTERNAL: number;
        NEST_EXTERNAL_PORT: number;
        PORT: number;
    }
  }