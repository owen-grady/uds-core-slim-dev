import { Expose, UDSPackage } from "../../crd";
/**
 * Creates a VirtualService for each exposed service in the package
 *
 * @param pkg
 * @param namespace
 */
export declare function virtualService(pkg: UDSPackage, namespace: string): Promise<string[]>;
export declare function generateVSName(pkg: UDSPackage, expose: Expose): string;
//# sourceMappingURL=virtual-service.d.ts.map