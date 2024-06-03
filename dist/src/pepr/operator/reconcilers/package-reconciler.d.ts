import { UDSPackage } from "../crd";
/**
 * The reconciler is called from the queue and is responsible for reconciling the state of the package
 * with the cluster. This includes creating the namespace, network policies and virtual services.
 *
 * @param pkg the package to reconcile
 */
export declare function packageReconciler(pkg: UDSPackage): Promise<void>;
//# sourceMappingURL=package-reconciler.d.ts.map