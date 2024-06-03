import { UDSPackage } from "../../crd";
/**
 * Syncs the package namespace istio-injection label and adds a label for the package name
 *
 * @param pkg
 */
export declare function enableInjection(pkg: UDSPackage): Promise<void>;
/**
 * Restores the namespace
 *
 * @param pkg the package to cleanup
 */
export declare function cleanupNamespace(pkg: UDSPackage): Promise<void>;
//# sourceMappingURL=injection.d.ts.map