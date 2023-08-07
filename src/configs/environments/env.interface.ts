export interface EnvironmentVariables {
  db_host?: string;
  db_port: number;
  db_name: string;
  db_user: string;
  db_password: string;
  // Server Envs
  port?: number;
  node_env?: string;
}
