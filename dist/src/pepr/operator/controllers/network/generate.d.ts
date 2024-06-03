import { kind } from "pepr";
import { Allow } from "../../crd";
export declare function generate(namespace: string, policy: Allow): kind.NetworkPolicy;
/**
 * Generates a unique name for the NetworkPolicy based on the description, direction, and combination of remote properties
 *
 * @param policy the name of the policy
 */
export declare function generateName(policy: Allow): string;
//# sourceMappingURL=generate.d.ts.map