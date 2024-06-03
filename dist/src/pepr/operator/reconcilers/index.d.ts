import { GenericKind } from "kubernetes-fluent-client";
import { kind } from "pepr";
import { ExemptStatus, PkgStatus, UDSExemption, UDSPackage } from "../crd";
/**
 * Checks if the CRD is pending or the current generation has been processed
 *
 * @param cr The custom resource to check
 * @returns true if the CRD is pending or the current generation has been processed
 */
export declare function shouldSkip(cr: UDSExemption | UDSPackage): boolean;
/**
 * Updates the status of the package
 *
 * @param cr The custom resource to update
 * @param status The new status
 */
export declare function updateStatus(cr: GenericKind, status: PkgStatus | ExemptStatus): Promise<void>;
/**
 * Write a K8s event for the CRD
 *
 * @param cr The custom resource to write the event for
 * @param message A human-readable message for the event
 * @param type The type of event to write
 */
export declare function writeEvent(cr: GenericKind, event: Partial<kind.CoreEvent>): Promise<void>;
/**
 * Handles a failure by updating the status of the CRD and writing an event
 *
 * @param err The error-like object
 * @param cr The custom resource that failed
 */
export declare function handleFailure(err: {
    status: number;
    message: string;
}, cr: UDSPackage | UDSExemption): Promise<void>;
//# sourceMappingURL=index.d.ts.map