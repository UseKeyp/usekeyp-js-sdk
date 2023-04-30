/**
 * Resolve ES5 requires for export default, named export and module.exports
 *
 * @param requireRequest the argument of the `require` function
 * @param name the name of the resulting variable
 * @returns AST
 */
declare const _default: (requireRequest: string, name: string) => import("ast-types").namedTypes.VariableDeclaration[];
export default _default;
