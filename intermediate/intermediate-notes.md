# Intermediate Section

# Table of Contents
- [Intermediate Section](#intermediate-section)
- [Table of Contents](#table-of-contents)
- [Objects](#objects)
  - [`this` in objects](#this-in-objects)
  - [Object Constructors](#object-constructors)
  - [Cloning objects](#cloning-objects)
  - [Garbage Collection](#garbage-collection)
  - [Symbols in objects](#symbols-in-objects)
  - [Object conversion to primitives](#object-conversion-to-primitives)
  - [Links to source code in this repository](#links-to-source-code-in-this-repository)


# Objects
Objects are complex data types that is a combination of primitive data  types. It can be created by using curly braces `{}` and assignment `property:value` pairs as property of object and the corresponding value. 

## `this` in objects
Within the object, `this` keyword can be used to refer to the object itself. This can be used to refer to the object's own property in its method.

An interesting application of `this` is that it allows for Javascript object to support method chaining that.


## Object Constructors
Constructors allow for a more compact way of initializing objects, but must be used with `new` keyword.

In some cases, for flexibility reasons, a trick can be used to detect whether the `new` keyword is used, and insert it during creation if it is not. This allows for users of the function to not explicity declare a new instance object with the `new` keyword. However, this should not be abused.

## Cloning objects
Objects can be closed using the methods below.

- Object.assign()
- Object.structuredClone() 

However these method are not able to perform a perfect coopy. assign() only does a shallow copy and does not do deep copy, while structuredClone support copying to at extend but fails at copying functions.


## Garbage Collection
Garbage collections are done differently in each Javascript Engine. But usually it is performed on objects are not reachable by any means. This is very similar in other high level languages like Java and Python.

## Symbols in objects
Symbols provide a way to uniquely assign an identifier. 

Declartion of symbols: `let newSymbol = Symbol('uid')`

Even if symbols have the same description, there are not the same even when compared using `==`.

## Object conversion to primitives
Some operations require implicit conversion, such as  `console.log(), alert()` which expects a `string` data type, or using comparison operators like `>, >=, <, <=` that implicitly require `number` data type. 

Hence by default, a plain object with no property is not capable of such. The developer has to manually configure the settings.

This is very similar to the `__str__` method in Python and Java's `toString` method which could be overridden.

In Javascript, there are 3 types
1. Using system symbols - `[Symbol.toPrimitive] = function (hint) {}`
2. Setting a `toString()` function
3. Setting a `valueOf()` function.

The conversion algorithm goes like:
- Check is `[Symbol.toPrimitive](hint)` exists.
- Otherwise if hint type is `string`, then call `toString() or valueOf()`
- Otherwise if hint type is `number` or `default`, then call `toString()` or `valueOf()`. 

<u>Note by me:</u> \
Currently it seems like eventually either `toString()` or `valueOf()`. Usually defining `toString()` is enough for primitive type conversion, or catching it using the system symbol.

## Links to source code in this repository
- Objects   

