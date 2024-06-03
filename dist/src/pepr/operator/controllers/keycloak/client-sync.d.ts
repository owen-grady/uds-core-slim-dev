import { UDSPackage } from "../../crd";
import { Client } from "./types";
/**
 * Create or update the Keycloak clients for the package
 *
 * @param pkg the package to process
 *
 * @returns the list of client refs
 */
export declare function keycloak(pkg: UDSPackage): Promise<string[]>;
/**
 * Remove any remaining clients that are not in the refs list
 *
 * @param pkg the package to process
 * @param refs the list of client refs to keep
 */
export declare function purgeSSOClients(pkg: UDSPackage, refs?: string[]): Promise<void>;
export declare function generateSecretData(client: Client, secretTemplate?: {
    [key: string]: string;
}): Record<string, string>;
//# sourceMappingURL=client-sync.d.ts.map