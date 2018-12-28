export function mapKey<R = {}, T = {}>(subject: T, callbackfn: (key: keyof T, index: number, obj: string[]) => R, thisArg?: any) {
  return Object.keys(subject).map(callbackfn as any, thisArg)
}
