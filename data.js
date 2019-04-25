const data = [
  {
    type: "Iterator<Item = T>",
    groups: [
      {
        name: "Combinators",
        items: [
          "chain(IntoIterator<Item = T>) -> Iterator<Item = T>",
          "zip(IntoIterator<Item = U>) -> Iterator<Item = (T, U)>",
          "map((T) -> U) -> Iterator<Item = U>",
          "filter((&T) -> bool) -> Iterator<Item = T>",
          "filter_map((T) -> Option<U>) -> Iterator<Item = U>",
          "enumerate() -> Iterator<Item = (usize, T)>",
          "scan(S, (&mut S, T) -> Option<U>) -> Iterator<Item = U>",
          "skip(usize) -> Iterator<Item = T>",
          "skip_while((&T) -> bool) -> Iterator<Item = T>",
          "take(usize) -> Iterator<Item = T>",
          "take_while((&T) -> bool) -> Iterator<Item = T>",
          "flat_map((T) -> Iterator<Item = U>) -> Iterator<Item = U>",
          "flatten() -> Iterator<U> where T: IntoIterator<U>",
          "inspect((&T) -> ()) -> Iterator<T>",
        ],
      }
    ],
    items: [
      "count() -> usize",
      "last() -> Option<T>",
      "nth(usize) -> Option<T>",
      "step_by(usize) -> Iterator<Item = T>",
      "for_each((T) -> ()) -> ()",
      "collect() -> B where B: FromIterator<T>",
      "partition((&T) -> bool) -> (B, B) where B: Default + Extend<T>",
      "fold(S, (S, T) -> S) -> S",
      "all((T) -> bool) -> bool",
      "any((T) -> bool) -> bool",
      "find((&T) -> bool) -> Option<T>",
      "find_map((T) -> Option<U>) -> Option<U>",
      "position((T) -> bool) -> Option<usize>",
      "rposition((T) -> bool) -> Option<usize> where Self: ExactSizeIterator + DoubleEndedIterator",
      "max() -> Option<T> where T: Ord",
      "max_by((&T, &T) -> Ordering) -> Option<T>",
      "max_by_key((&T) -> U) -> Option<T> where U: Ord",
      "min() -> Option<T> where T: Ord",
      "min_by((&T, &T) -> Ordering) -> Option<T>",
      "min_by_key((&T) -> U) -> Option<T> where U: Ord",
      "rev() -> Iterator<Item = T> where Self: DoubleEndedIterator",
      "cloned() -> Iterator<Item = T> where Self: Iterator<Item = &T>",
      "cycle() -> Iterator<Item = T> where Self: Clone",
      "sum() -> S where S: Sum<T>",
      "product() -> P where P: Product<T>",
      "cmp(IntoIterator<Item = T>) -> Ordering where T: Ord",
      "partial_cmp(IntoIterator<Item = T>) -> Option<Ordering> where T: PartialOrd",
      "eq(IntoIterator<Item = T>) -> bool where T: PartialEq",
      "ne(IntoIterator<Item = T>) -> bool where T: PartialEq",
      "lt(IntoIterator<Item = T>) -> bool where T: PartialOrd",
      "le(IntoIterator<Item = T>) -> bool where T: PartialOrd",
      "gt(IntoIterator<Item = T>) -> bool where T: PartialOrd",
      "ge(IntoIterator<Item = T>) -> bool where T: PartialOrd",
    ],
  },
];