import { KubernetesObject } from "kubernetes-fluent-client";
import { PeprMutateRequest, PeprValidateRequest } from "pepr";
import { Policy } from "../../operator/crd";
/**
 * Check a resource against an exemption list for use by the validation action.
 *
 * @param policy Policy to get exemptions for
 * @param request The request to check.
 * @returns True if exempt and false otherwise
 */
export declare function isExempt<T extends KubernetesObject>(request: PeprValidateRequest<T> | PeprMutateRequest<T>, policy: Policy): boolean;
/**
 *
 * @param policy
 * @returns Function that takes PeprMutateRequest and evaluates if request isExempt()
 */
export declare function markExemption<T extends KubernetesObject>(policy: Policy): (request: PeprMutateRequest<T>) => void;
//# sourceMappingURL=index.d.ts.map