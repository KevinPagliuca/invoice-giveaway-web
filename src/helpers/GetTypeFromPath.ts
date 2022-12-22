type JoinObjectType<T extends string> = T extends '' ? '' : `.${T}`;

export type ObjectPathType<T> = (
  T extends object
    ? {
        [Key in Exclude<keyof T, symbol>]: `${Key}${JoinObjectType<ObjectPathType<T[Key]>>}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;
