import { _ as _typeof, s as safe_not_equal, n as noop, i as init, d as dispatch_dev, S as SvelteComponentDev, c as create_slot, a as assign, b as current_component, e as exclude_internal_props, f as element, g as claim_element, h as children, j as detach_dev, k as set_attributes, l as add_location, m as insert_dev, o as get_slot_context, p as get_slot_changes, q as get_spread_update, r as is_function, t as transition_in, u as transition_out, v as _inherits$1, w as _classCallCheck$1, x as _possibleConstructorReturn$1, y as _getPrototypeOf$1, z as _assertThisInitialized$1, A as validate_store, B as component_subscribe, C as onMount, D as empty, E as listen_dev, F as binding_callbacks, G as globals, H as bind, I as create_component, J as claim_component, K as mount_component, L as destroy_component, M as space, N as claim_space, O as attr_dev, P as append_dev, Q as add_flush_callback, R as group_outros, T as check_outros, U as update_keyed_each, V as outro_and_destroy_block, W as text, X as claim_text, Y as svg_element, Z as set_style, $ as set_data_dev, a0 as _createClass$1, a1 as get_spread_object, a2 as setContext, a3 as getContext } from './index.0812fa32.js';
import { s as styleInject } from './style-inject.es.8e8f85b0.js';
import { T as TopAppBar, R as Row, S as Section, a as Title } from './index.d88768fb.js';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import { e as exclude, f as forwardEventsBuilder, u as useActions } from './useActions.03a18d11.js';
import { D as Drawer, A as AppContent, C as Content, S as Scrim } from './index.d9e04e30.js';
import './index.6bfd94d7.js';
import './Label.cdd98476.js';
import { I as Icon } from './Icon.e7ebcf54.js';
import { I as IconButton } from './index.15f8a983.js';
import { L as List, T as Text } from './index.ec2d92bf.js';
import { I as Item } from './Item.02b48338.js';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

var subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var stop;
  var subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        var run_queue = !subscriber_queue.length;

        for (var i = 0; i < subscribers.length; i += 1) {
          var s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
            subscriber_queue[_i][0](subscriber_queue[_i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return function () {
      var index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

var CONTEXT_KEY = {};
var preload = function preload() {
  return {};
};

// Material Design Icons v4.7.95
var mdiGithubCircle="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z";var mdiTwitter="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z";

var css = ".mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{font-size:6rem;line-height:6rem;letter-spacing:-.01562em}.mdc-typography--headline1,.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{font-size:3.75rem;line-height:3.75rem;letter-spacing:-.00833em}.mdc-typography--headline3{font-size:3rem;line-height:3.125rem;letter-spacing:normal}.mdc-typography--headline3,.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{font-size:2.125rem;line-height:2.5rem;letter-spacing:.00735em}.mdc-typography--headline5{font-size:1.5rem;font-weight:400;letter-spacing:normal}.mdc-typography--headline5,.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:2rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-size:1.25rem;font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1{font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em}.mdc-typography--subtitle1,.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.00714em}.mdc-typography--body1{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{font-size:.875rem;letter-spacing:.01786em}.mdc-typography--body2,.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.25rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption{font-size:.75rem;letter-spacing:.03333em}.mdc-typography--button{font-size:.875rem;line-height:2.25rem;letter-spacing:.08929em}.mdc-typography--button,.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none;text-transform:uppercase}.mdc-typography--overline{font-size:.75rem;line-height:2rem;letter-spacing:.16667em}html{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit}h1{font-size:6rem;line-height:6rem;letter-spacing:-.01562em}h1,h2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:300;text-decoration:inherit;text-transform:inherit}h2{font-size:3.75rem;line-height:3.75rem;letter-spacing:-.00833em}h3{font-size:3rem;line-height:3.125rem;letter-spacing:normal}h3,h4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:400;text-decoration:inherit;text-transform:inherit}h4{font-size:2.125rem;line-height:2.5rem;letter-spacing:.00735em}h5{font-size:1.5rem;font-weight:400;letter-spacing:normal}h5,h6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:2rem;text-decoration:inherit;text-transform:inherit}h6{font-size:1.25rem;font-weight:500;letter-spacing:.0125em}caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}code,pre{font-family:Roboto Mono,monospace}small{font-size:.9em}big{font-size:1.1em}b,strong{font-weight:700}:root{--mdc-theme-primary:#ff3e00;--mdc-theme-secondary:#676778;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b71c1c;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#ff3e00!important;color:var(--mdc-theme-primary,#ff3e00)!important}.mdc-theme--secondary{color:#676778!important;color:var(--mdc-theme-secondary,#676778)!important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error{color:#b71c1c!important;color:var(--mdc-theme-error,#b71c1c)!important}.mdc-theme--on-primary{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#ff3e00!important;background-color:var(--mdc-theme-primary,#ff3e00)!important}.mdc-theme--secondary-bg{background-color:#676778!important;background-color:var(--mdc-theme-secondary,#676778)!important}.mdc-top-app-bar{background-color:#ff3e00;background-color:var(--mdc-theme-primary,#ff3e00);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}.mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short[dir=rtl],[dir=rtl] .mdc-top-app-bar--short{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding .15s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width:599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}.smui-top-app-bar--static{position:static}.smui-top-app-bar--color-secondary{background-color:#676778;background-color:var(--mdc-theme-secondary,#676778);color:#fff}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-secondary,#fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-secondary,#fff)}}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-top-app-bar.demo-top-app-bar{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:rgba(0,0,0,.87);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);z-index:7}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon{color:#000;color:var(--mdc-theme-on-surface,#000)}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#000}@supports not (-ms-ime-align:auto){.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-surface,#000)}}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.04}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar.demo-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}html{height:100vh;width:100vw;position:fixed}app,body{display:flex;flex-direction:column;height:100%}.drawer-container{flex-grow:1;height:0;display:flex}.demo-drawer,.demo-main-content{overflow:auto;height:100%}.demo-drawer.demo-drawer-adjust{padding-bottom:64px}.demo-app-content{flex:auto;position:relative;width:0;flex-grow:1}.demo-main-content{overflow:auto;display:flex}.demo-main-content section{padding:16px;width:100%;box-sizing:border-box}.demo-main-content section:after{height:32px;display:block;content:\" \"}section>div{margin:1em 0 .6em}.status{max-width:100%;font-size:.9em;word-break:break-word;white-space:normal}";
styleInject(css);

var file = "home/hperrin/repos/svelte-material-ui/packages/common/A.svelte";

function create_fragment(ctx) {
  var a;
  var useActions_action;
  var forwardEvents_action;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[5].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[4], null);
  var a_levels = [{
    href:
    /*href*/
    ctx[1]
  }, exclude(
  /*$$props*/
  ctx[3], ["use", "href"])];
  var a_data = {};

  for (var i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }

  var block = {
    c: function create() {
      a = element("a");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      if (default_slot) default_slot.l(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(a, a_data);
      add_location(a, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);

      if (default_slot) {
        default_slot.m(a, null);
      }

      useActions_action = useActions.call(null, a,
      /*use*/
      ctx[0]) || {};
      forwardEvents_action =
      /*forwardEvents*/
      ctx[2].call(null, a) || {};
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      16) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[4], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[4], dirty, null));
      }

      set_attributes(a, get_spread_update(a_levels, [dirty[0] &
      /*href*/
      2 && {
        href:
        /*href*/
        ctx[1]
      }, dirty[0] &
      /*$$props*/
      8 && exclude(
      /*$$props*/
      ctx[3], ["use", "href"])]));
      if (is_function(useActions_action.update) && dirty[0] &
      /*use*/
      1) useActions_action.update.call(null,
      /*use*/
      ctx[0]);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
      if (default_slot) default_slot.d(detaching);
      if (useActions_action && is_function(useActions_action.destroy)) useActions_action.destroy();
      if (forwardEvents_action && is_function(forwardEvents_action.destroy)) forwardEvents_action.destroy();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var forwardEvents = forwardEventsBuilder(current_component);
  var _$$props = $$props,
      _$$props$use = _$$props.use,
      use = _$$props$use === void 0 ? [] : _$$props$use;
  var _$$props2 = $$props,
      _$$props2$href = _$$props2.href,
      href = _$$props2$href === void 0 ? "javascript:void(0);" : _$$props2$href;
  var _$$props3 = $$props,
      _$$props3$$$slots = _$$props3.$$slots,
      $$slots = _$$props3$$$slots === void 0 ? {} : _$$props3$$$slots,
      $$scope = _$$props3.$$scope;

  $$self.$set = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
    if ("href" in $$new_props) $$invalidate(1, href = $$new_props.href);
    if ("$$scope" in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      use: use,
      href: href
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(3, $$props = assign(assign({}, $$props), $$new_props));
    if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
    if ("href" in $$props) $$invalidate(1, href = $$new_props.href);
  };

  $$props = exclude_internal_props($$props);
  return [use, href, forwardEvents, $$props, $$scope, $$slots];
}

var A =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits(A, _SvelteComponentDev);

  function A(options) {
    var _this;

    _classCallCheck(this, A);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(A).call(this, options));
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      use: 0,
      href: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "A",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(A, [{
    key: "use",
    get: function get() {
      throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "href",
    get: function get() {
      throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return A;
}(SvelteComponentDev);

var window_1 = globals.window;
var file$1 = "src/routes/_layout.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  child_ctx[17] = list;
  child_ctx[18] = i;
  return child_ctx;
} // (4:0) {:else}


function create_else_block(ctx) {
  var t0;
  var div;
  var updating_open;
  var t1;
  var t2;
  var current;
  var topappbar = new TopAppBar({
    props: {
      variant: "static",
      class: "demo-top-app-bar",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });

  function drawer_open_binding(value) {
    /*drawer_open_binding*/
    ctx[13].call(null, value);
  }

  var drawer_props = {
    variant:
    /*miniWindow*/
    ctx[1] ? "modal" : null,
    class: "demo-drawer mdc-theme--secondary-bg " + (
    /*miniWindow*/
    ctx[1] ? "demo-drawer-adjust" : ""),
    $$slots: {
      default: [create_default_slot_1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*drawerOpen*/
  ctx[2] !== void 0) {
    drawer_props.open =
    /*drawerOpen*/
    ctx[2];
  }

  var drawer = new Drawer({
    props: drawer_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(drawer, "open", drawer_open_binding);
  });
  var if_block =
  /*miniWindow*/
  ctx[1] && create_if_block_1(ctx);
  var appcontent = new AppContent({
    props: {
      class: "demo-app-content",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(topappbar.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(drawer.$$.fragment);
      t1 = space();
      if (if_block) if_block.c();
      t2 = space();
      create_component(appcontent.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(topappbar.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(drawer.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      if (if_block) if_block.l(div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(appcontent.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "drawer-container");
      add_location(div, file$1, 32, 2, 1101);
    },
    m: function mount(target, anchor) {
      mount_component(topappbar, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      mount_component(drawer, div, null);
      append_dev(div, t1);
      if (if_block) if_block.m(div, null);
      append_dev(div, t2);
      mount_component(appcontent, div, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      var topappbar_changes = {};

      if (dirty[0] &
      /*$$scope, miniWindow, drawerOpen*/
      32774) {
        topappbar_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      topappbar.$set(topappbar_changes);
      var drawer_changes = {};
      if (dirty[0] &
      /*miniWindow*/
      2) drawer_changes.variant =
      /*miniWindow*/
      ctx[1] ? "modal" : null;
      if (dirty[0] &
      /*miniWindow*/
      2) drawer_changes.class = "demo-drawer mdc-theme--secondary-bg " + (
      /*miniWindow*/
      ctx[1] ? "demo-drawer-adjust" : "");

      if (dirty[0] &
      /*$$scope, sections, $page*/
      32792) {
        drawer_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_open && dirty[0] &
      /*drawerOpen*/
      4) {
        updating_open = true;
        drawer_changes.open =
        /*drawerOpen*/
        ctx[2];
        add_flush_callback(function () {
          return updating_open = false;
        });
      }

      drawer.$set(drawer_changes);

      if (
      /*miniWindow*/
      ctx[1]) {
        if (!if_block) {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t2);
        } else {
          transition_in(if_block, 1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      var appcontent_changes = {};

      if (dirty[0] &
      /*$$scope, mainContent*/
      32769) {
        appcontent_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      appcontent.$set(appcontent_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(topappbar.$$.fragment, local);
      transition_in(drawer.$$.fragment, local);
      transition_in(if_block);
      transition_in(appcontent.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(topappbar.$$.fragment, local);
      transition_out(drawer.$$.fragment, local);
      transition_out(if_block);
      transition_out(appcontent.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(topappbar, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      destroy_component(drawer);
      if (if_block) if_block.d();
      destroy_component(appcontent);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(4:0) {:else}",
    ctx: ctx
  });
  return block;
} // (2:0) {#if iframe}


function create_if_block(ctx) {
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[9].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[15], null);
  var block = {
    c: function create() {
      if (default_slot) default_slot.c();
    },
    l: function claim(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m: function mount(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }

      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      32768) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[15], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[15], dirty, null));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(2:0) {#if iframe}",
    ctx: ctx
  });
  return block;
} // (8:8) {#if miniWindow}


function create_if_block_2(ctx) {
  var current;
  var iconbutton = new IconButton({
    props: {
      class: "material-icons",
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  iconbutton.$on("click",
  /*click_handler*/
  ctx[10]);
  var block = {
    c: function create() {
      create_component(iconbutton.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton_changes = {};

      if (dirty[0] &
      /*$$scope*/
      32768) {
        iconbutton_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton.$set(iconbutton_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(8:8) {#if miniWindow}",
    ctx: ctx
  });
  return block;
} // (9:10) <IconButton class="material-icons" on:click={() => drawerOpen = !drawerOpen}>


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("menu");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "menu");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(9:10) <IconButton class=\\\"material-icons\\\" on:click={() => drawerOpen = !drawerOpen}>",
    ctx: ctx
  });
  return block;
} // (11:8) <Title component={A} href="/" class="mdc-theme--primary" style="{miniWindow ? 'padding-left: 0;' : ''}">


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Svelte Material UI");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Svelte Material UI");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(11:8) <Title component={A} href=\\\"/\\\" class=\\\"mdc-theme--primary\\\" style=\\\"{miniWindow ? 'padding-left: 0;' : ''}\\\">",
    ctx: ctx
  });
  return block;
} // (7:6) <Section>


function create_default_slot_13(ctx) {
  var t;
  var current;
  var if_block =
  /*miniWindow*/
  ctx[1] && create_if_block_2(ctx);
  var title = new Title({
    props: {
      component: A,
      href: "/",
      class: "mdc-theme--primary",
      style:
      /*miniWindow*/
      ctx[1] ? "padding-left: 0;" : "",
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      t = space();
      create_component(title.$$.fragment);
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      t = claim_space(nodes);
      claim_component(title.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, t, anchor);
      mount_component(title, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*miniWindow*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          transition_in(if_block, 1);
        } else {
          if_block = create_if_block_2(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      var title_changes = {};
      if (dirty[0] &
      /*miniWindow*/
      2) title_changes.style =
      /*miniWindow*/
      ctx[1] ? "padding-left: 0;" : "";

      if (dirty[0] &
      /*$$scope*/
      32768) {
        title_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      title.$set(title_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      transition_in(title.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(title.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(t);
      destroy_component(title, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(7:6) <Section>",
    ctx: ctx
  });
  return block;
} // (17:10) <Icon>


function create_default_slot_12(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        style: true,
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "#000000");
      attr_dev(path, "d", mdiTwitter);
      add_location(path, file$1, 18, 14, 677);
      set_style(svg, "width", "24px");
      set_style(svg, "height", "24px");
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$1, 17, 12, 606);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(17:10) <Icon>",
    ctx: ctx
  });
  return block;
} // (16:8) <IconButton href="https://twitter.com/SciActive">


function create_default_slot_11(ctx) {
  var current;
  var icon = new Icon({
    props: {
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope*/
      32768) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(16:8) <IconButton href=\\\"https://twitter.com/SciActive\\\">",
    ctx: ctx
  });
  return block;
} // (24:10) <Icon>


function create_default_slot_10(ctx) {
  var svg;
  var path;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        style: true,
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "fill", "#000000");
      attr_dev(path, "d", mdiGithubCircle);
      add_location(path, file$1, 25, 14, 951);
      set_style(svg, "width", "24px");
      set_style(svg, "height", "24px");
      attr_dev(svg, "viewBox", "0 0 24 24");
      add_location(svg, file$1, 24, 12, 880);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(24:10) <Icon>",
    ctx: ctx
  });
  return block;
} // (23:8) <IconButton href="https://github.com/hperrin/svelte-material-ui">


function create_default_slot_9(ctx) {
  var current;
  var icon = new Icon({
    props: {
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(icon.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_changes = {};

      if (dirty[0] &
      /*$$scope*/
      32768) {
        icon_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      icon.$set(icon_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(23:8) <IconButton href=\\\"https://github.com/hperrin/svelte-material-ui\\\">",
    ctx: ctx
  });
  return block;
} // (15:6) <Section align="end" toolbar>


function create_default_slot_8(ctx) {
  var t;
  var current;
  var iconbutton0 = new IconButton({
    props: {
      href: "https://twitter.com/SciActive",
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var iconbutton1 = new IconButton({
    props: {
      href: "https://github.com/hperrin/svelte-material-ui",
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(iconbutton0.$$.fragment);
      t = space();
      create_component(iconbutton1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(iconbutton0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(iconbutton1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(iconbutton0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(iconbutton1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var iconbutton0_changes = {};

      if (dirty[0] &
      /*$$scope*/
      32768) {
        iconbutton0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton0.$set(iconbutton0_changes);
      var iconbutton1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      32768) {
        iconbutton1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      iconbutton1.$set(iconbutton1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(iconbutton0.$$.fragment, local);
      transition_in(iconbutton1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(iconbutton0.$$.fragment, local);
      transition_out(iconbutton1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(iconbutton0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(iconbutton1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(15:6) <Section align=\\\"end\\\" toolbar>",
    ctx: ctx
  });
  return block;
} // (6:4) <Row>


function create_default_slot_7(ctx) {
  var t;
  var current;
  var section0 = new Section({
    props: {
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var section1 = new Section({
    props: {
      align: "end",
      toolbar: true,
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(section0.$$.fragment);
      t = space();
      create_component(section1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(section0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(section1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(section0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(section1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var section0_changes = {};

      if (dirty[0] &
      /*$$scope, miniWindow, drawerOpen*/
      32774) {
        section0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section0.$set(section0_changes);
      var section1_changes = {};

      if (dirty[0] &
      /*$$scope*/
      32768) {
        section1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      section1.$set(section1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(section0.$$.fragment, local);
      transition_in(section1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(section0.$$.fragment, local);
      transition_out(section1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(section0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(section1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(6:4) <Row>",
    ctx: ctx
  });
  return block;
} // (5:2) <TopAppBar variant="static" class="demo-top-app-bar">


function create_default_slot_6(ctx) {
  var current;
  var row = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(row.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(row.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var row_changes = {};

      if (dirty[0] &
      /*$$scope, miniWindow, drawerOpen*/
      32774) {
        row_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row.$set(row_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(row, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(5:2) <TopAppBar variant=\\\"static\\\" class=\\\"demo-top-app-bar\\\">",
    ctx: ctx
  });
  return block;
} // (46:14) <Text class="mdc-theme--on-secondary">


function create_default_slot_5(ctx) {
  var t_value =
  /*section*/
  ctx[16].name + "";
  var t;
  var block = {
    c: function create() {
      t = text(t_value);
    },
    l: function claim(nodes) {
      t = claim_text(nodes, t_value);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*sections*/
      8 && t_value !== (t_value =
      /*section*/
      ctx[16].name + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(46:14) <Text class=\\\"mdc-theme--on-secondary\\\">",
    ctx: ctx
  });
  return block;
} // (38:12) <Item               bind:this={section.component}               href={'route' in section ? section.route : section.shortcut}               on:click={() => pickSection(section)}               activated={'route' in section && section.route === $page.path}               title={section.name}               style="{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}"             >


function create_default_slot_4(ctx) {
  var t;
  var current;
  var text_1 = new Text({
    props: {
      class: "mdc-theme--on-secondary",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(text_1.$$.fragment);
      t = space();
    },
    l: function claim(nodes) {
      claim_component(text_1.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m: function mount(target, anchor) {
      mount_component(text_1, target, anchor);
      insert_dev(target, t, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var text_1_changes = {};

      if (dirty[0] &
      /*$$scope, sections*/
      32776) {
        text_1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      text_1.$set(text_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(text_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(text_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(text_1, detaching);
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(38:12) <Item               bind:this={section.component}               href={'route' in section ? section.route : section.shortcut}               on:click={() => pickSection(section)}               activated={'route' in section && section.route === $page.path}               title={section.name}               style=\\\"{section.indent ? 'margin-left: '+(section.indent * 25)+'px;' : ''}\\\"             >",
    ctx: ctx
  });
  return block;
} // (37:10) {#each sections as section (section.name)}


function create_each_block(key_1, ctx) {
  var first;
  var section =
  /*section*/
  ctx[16];
  var current;

  var assign_item = function assign_item() {
    return (
      /*item_binding*/
      ctx[11](item, section)
    );
  };

  var unassign_item = function unassign_item() {
    return (
      /*item_binding*/
      ctx[11](null, section)
    );
  };

  function click_handler_1() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler_1*/
      (_ctx = ctx)[12].apply(_ctx, [
      /*section*/
      ctx[16]].concat(args))
    );
  }

  var item_props = {
    href: "route" in
    /*section*/
    ctx[16] ?
    /*section*/
    ctx[16].route :
    /*section*/
    ctx[16].shortcut,
    activated: "route" in
    /*section*/
    ctx[16] &&
    /*section*/
    ctx[16].route ===
    /*$page*/
    ctx[4].path,
    title:
    /*section*/
    ctx[16].name,
    style:
    /*section*/
    ctx[16].indent ? "margin-left: " +
    /*section*/
    ctx[16].indent * 25 + "px;" : "",
    $$slots: {
      default: [create_default_slot_4]
    },
    $$scope: {
      ctx: ctx
    }
  };
  var item = new Item({
    props: item_props,
    $$inline: true
  });
  assign_item();
  item.$on("click", click_handler_1);
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      first = empty();
      create_component(item.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      claim_component(item.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      mount_component(item, target, anchor);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (section !==
      /*section*/
      ctx[16]) {
        unassign_item();
        section =
        /*section*/
        ctx[16];
        assign_item();
      }

      var item_changes = {};
      if (dirty[0] &
      /*sections*/
      8) item_changes.href = "route" in
      /*section*/
      ctx[16] ?
      /*section*/
      ctx[16].route :
      /*section*/
      ctx[16].shortcut;
      if (dirty[0] &
      /*sections, $page*/
      24) item_changes.activated = "route" in
      /*section*/
      ctx[16] &&
      /*section*/
      ctx[16].route ===
      /*$page*/
      ctx[4].path;
      if (dirty[0] &
      /*sections*/
      8) item_changes.title =
      /*section*/
      ctx[16].name;
      if (dirty[0] &
      /*sections*/
      8) item_changes.style =
      /*section*/
      ctx[16].indent ? "margin-left: " +
      /*section*/
      ctx[16].indent * 25 + "px;" : "";

      if (dirty[0] &
      /*$$scope, sections*/
      32776) {
        item_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      item.$set(item_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(item.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(item.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      unassign_item();
      destroy_component(item, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(37:10) {#each sections as section (section.name)}",
    ctx: ctx
  });
  return block;
} // (36:8) <List>


function create_default_slot_3(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var current;
  var each_value =
  /*sections*/
  ctx[3];

  var get_key = function get_key(ctx) {
    return (
      /*section*/
      ctx[16].name
    );
  };

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var block = {
    c: function create() {
      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var each_value =
      /*sections*/
      ctx[3];
      group_outros();
      each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
      check_outros();
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].d(detaching);
      }

      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(36:8) <List>",
    ctx: ctx
  });
  return block;
} // (35:6) <Content>


function create_default_slot_2(ctx) {
  var current;
  var list = new List({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(list.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(list.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(list, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var list_changes = {};

      if (dirty[0] &
      /*$$scope, sections, $page*/
      32792) {
        list_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      list.$set(list_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(list.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(list.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(list, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(35:6) <Content>",
    ctx: ctx
  });
  return block;
} // (34:4) <Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen} class="demo-drawer mdc-theme--secondary-bg {miniWindow ? 'demo-drawer-adjust' : ''}">


function create_default_slot_1(ctx) {
  var current;
  var content = new Content({
    props: {
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(content.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(content.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(content, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var content_changes = {};

      if (dirty[0] &
      /*$$scope, sections, $page*/
      32792) {
        content_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      content.$set(content_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(content.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(content.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(content, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(34:4) <Drawer variant={miniWindow ? 'modal' : null} bind:open={drawerOpen} class=\\\"demo-drawer mdc-theme--secondary-bg {miniWindow ? 'demo-drawer-adjust' : ''}\\\">",
    ctx: ctx
  });
  return block;
} // (53:4) {#if miniWindow}


function create_if_block_1(ctx) {
  var current;
  var scrim = new Scrim({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(scrim.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(scrim.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(scrim, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(scrim.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(scrim.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(scrim, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(53:4) {#if miniWindow}",
    ctx: ctx
  });
  return block;
} // (56:4) <AppContent class="demo-app-content">


function create_default_slot(ctx) {
  var main;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[9].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[15], null);
  var block = {
    c: function create() {
      main = element("main");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(main, "class", "demo-main-content");
      add_location(main, file$1, 56, 6, 2035);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);

      if (default_slot) {
        default_slot.m(main, null);
      }
      /*main_binding*/


      ctx[14](main);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot && default_slot.p && dirty[0] &
      /*$$scope*/
      32768) {
        default_slot.p(get_slot_context(default_slot_template, ctx,
        /*$$scope*/
        ctx[15], null), get_slot_changes(default_slot_template,
        /*$$scope*/
        ctx[15], dirty, null));
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
      if (default_slot) default_slot.d(detaching);
      /*main_binding*/

      ctx[14](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(56:4) <AppContent class=\\\"demo-app-content\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var dispose;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*iframe*/
    ctx[6]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      dispose = listen_dev(window_1, "resize",
      /*setMiniWindow*/
      ctx[8], false, false, false);
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if_block.p(ctx, dirty);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var $page;

  var _stores = stores$1(),
      page = _stores.page;

  validate_store(page, "page");
  component_subscribe($$self, page, function (value) {
    return $$invalidate(4, $page = value);
  });
  var iframe = $page.path.startsWith("/demo/top-app-bar-iframe");
  var mainContent;
  var miniWindow = false;
  var drawerOpen = false;
  var sections = [{
    name: "Buttons",
    route: "/demo/button",
    indent: 0
  }, {
    name: "Floating Action Button",
    route: "/demo/fab",
    indent: 1
  }, {
    name: "Icon Buttons",
    route: "/demo/icon-button",
    indent: 1
  }, {
    name: "Cards",
    route: "/demo/card",
    indent: 0
  }, {
    name: "Chips",
    route: "/demo/chips",
    indent: 0
  }, {
    name: "Data Tables",
    route: "/demo/data-table",
    indent: 0
  }, {
    name: "Dialogs",
    route: "/demo/dialog",
    indent: 0
  }, {
    name: "Drawers",
    route: "/demo/drawer",
    indent: 0
  }, {
    name: "Elevation",
    route: "/demo/elevation",
    indent: 0
  }, {
    name: "Image List",
    route: "/demo/image-list",
    indent: 0
  }, {
    name: "Inputs and Controls",
    shortcut: "/demo/textfield",
    indent: 0
  }, {
    name: "Checkboxes",
    route: "/demo/checkbox",
    indent: 1
  }, {
    name: "Floating Label",
    shortcut: "/demo/textfield",
    indent: 1
  }, {
    name: "Form Fields",
    shortcut: "/demo/radio",
    indent: 1
  }, {
    name: "Line Ripple",
    shortcut: "/demo/textfield",
    indent: 1
  }, {
    name: "Notched Outline",
    shortcut: "/demo/textfield",
    indent: 1
  }, {
    name: "Radio Buttons",
    route: "/demo/radio",
    indent: 1
  }, {
    name: "Select Menus",
    route: "/demo/select",
    indent: 1
  }, {
    name: "Select Helper Text",
    shortcut: "/demo/select",
    indent: 2
  }, {
    name: "Select Icon",
    shortcut: "/demo/select",
    indent: 2
  }, {
    name: "Sliders",
    route: "/demo/slider",
    indent: 1
  }, {
    name: "Switches",
    route: "/demo/switch",
    indent: 1
  }, {
    name: "Text Field",
    route: "/demo/textfield",
    indent: 1
  }, {
    name: "Text Field Character Count",
    shortcut: "/demo/textfield",
    indent: 2
  }, {
    name: "Text Field Helper Text",
    shortcut: "/demo/textfield",
    indent: 2
  }, {
    name: "Text Field Icon",
    shortcut: "/demo/textfield",
    indent: 2
  }, {
    name: "Linear Progress",
    route: "/demo/linear-progress",
    indent: 0
  }, {
    name: "Lists",
    route: "/demo/list",
    indent: 0
  }, {
    name: "Menu Surface",
    route: "/demo/menu-surface",
    indent: 0
  }, {
    name: "Menus",
    route: "/demo/menu",
    indent: 0
  }, {
    name: "Paper",
    route: "/demo/paper",
    indent: 0
  }, {
    name: "Ripples",
    route: "/demo/ripple",
    indent: 0
  }, {
    name: "Snackbars",
    route: "/demo/snackbars",
    indent: 0
  }, {
    name: "Tabs",
    route: "/demo/tabs",
    indent: 0
  }, {
    name: "Tab",
    shortcut: "/demo/tabs",
    indent: 1
  }, {
    name: "Tab Bar",
    shortcut: "/demo/tabs",
    indent: 1
  }, {
    name: "Tab Indicator",
    shortcut: "/demo/tabs",
    indent: 1
  }, {
    name: "Tab Scroller",
    shortcut: "/demo/tabs",
    indent: 1
  }, {
    name: "Theme",
    route: "/demo/theme",
    indent: 0
  }, {
    name: "Top App Bar",
    route: "/demo/top-app-bar",
    indent: 0
  }, {
    name: "Typography",
    route: "/demo/typography",
    indent: 0
  }];
  onMount(setMiniWindow);

  function pickSection(section) {
    $$invalidate(2, drawerOpen = false);
    $$invalidate(0, mainContent.scrollTop = 0, mainContent);
    sections.forEach(function (section) {
      return section.component.$set({
        activated: false
      });
    });
    section.component.$set({
      activated: true
    });
  }

  function setMiniWindow() {
    $$invalidate(1, miniWindow = window.innerWidth < 720);
  }

  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  var click_handler = function click_handler() {
    return $$invalidate(2, drawerOpen = !drawerOpen);
  };

  function item_binding($$value, section) {
    if (section.component === $$value) return;
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      section.component = $$value;
      $$invalidate(16, section);
    });
  }

  var click_handler_1 = function click_handler_1(section) {
    return pickSection(section);
  };

  function drawer_open_binding(value) {
    drawerOpen = value;
    $$invalidate(2, drawerOpen);
  }

  function main_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(0, mainContent = $$value);
    });
  }

  $$self.$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(15, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {};
  };

  $$self.$inject_state = function ($$props) {
    if ("mainContent" in $$props) $$invalidate(0, mainContent = $$props.mainContent);
    if ("miniWindow" in $$props) $$invalidate(1, miniWindow = $$props.miniWindow);
    if ("drawerOpen" in $$props) $$invalidate(2, drawerOpen = $$props.drawerOpen);
    if ("$page" in $$props) page.set($page = $$props.$page);
  };

  return [mainContent, miniWindow, drawerOpen, sections, $page, page, iframe, pickSection, setMiniWindow, $$slots, click_handler, item_binding, click_handler_1, drawer_open_binding, main_binding, $$scope];
}

var Layout =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Layout, _SvelteComponentDev);

  function Layout(options) {
    var _this;

    _classCallCheck$1(this, Layout);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Layout).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Layout;
}(SvelteComponentDev);

var Error_1 = globals.Error;
var file$2 = "src/routes/_error.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-hc3g3x-style";
  style.textContent = "h1.svelte-hc3g3x,p.svelte-hc3g3x{margin:0 auto}h1.svelte-hc3g3x{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-hc3g3x{margin:1em auto}@media(min-width: 480px){h1.svelte-hc3g3x{font-size:4em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Vycm9yLnN2ZWx0ZSIsInNvdXJjZXMiOlsiX2Vycm9yLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IHN0YXR1cztcbiAgZXhwb3J0IGxldCBlcnJvcjtcblxuICBjb25zdCBkZXYgPSBcImRldmVsb3BtZW50XCIgPT09ICdkZXZlbG9wbWVudCc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBoMSwgcCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjhlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT57c3RhdHVzfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e3N0YXR1c308L2gxPlxuXG48cD57ZXJyb3IubWVzc2FnZX08L3A+XG5cbnsjaWYgZGV2ICYmIGVycm9yLnN0YWNrfVxuICA8cHJlPntlcnJvci5zdGFja308L3ByZT5cbnsvaWZ9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUUsZ0JBQUUsQ0FBRSxDQUFDLGNBQUMsQ0FBQyxBQUNMLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxBQUNoQixDQUFDLEFBRUQsRUFBRSxjQUFDLENBQUMsQUFDRixTQUFTLENBQUUsS0FBSyxDQUNoQixXQUFXLENBQUUsR0FBRyxDQUNoQixNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUNyQixDQUFDLEFBRUQsQ0FBQyxjQUFDLENBQUMsQUFDRCxNQUFNLENBQUUsR0FBRyxDQUFDLElBQUksQUFDbEIsQ0FBQyxBQUVELE1BQU0sQUFBQyxZQUFZLEtBQUssQ0FBQyxBQUFDLENBQUMsQUFDekIsRUFBRSxjQUFDLENBQUMsQUFDRixTQUFTLENBQUUsR0FBRyxBQUNoQixDQUFDLEFBQ0gsQ0FBQyJ9 */";
  append_dev(document.head, style);
} // (38:0) {#if dev && error.stack}


function create_if_block$1(ctx) {
  var pre;
  var t_value =
  /*error*/
  ctx[1].stack + "";
  var t;
  var block = {
    c: function create() {
      pre = element("pre");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      pre = claim_element(nodes, "PRE", {});
      var pre_nodes = children(pre);
      t = claim_text(pre_nodes, t_value);
      pre_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(pre, file$2, 38, 2, 473);
    },
    m: function mount(target, anchor) {
      insert_dev(target, pre, anchor);
      append_dev(pre, t);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*error*/
      2 && t_value !== (t_value =
      /*error*/
      ctx[1].stack + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(pre);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(38:0) {#if dev && error.stack}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var title_value;
  var t0;
  var h1;
  var t1;
  var t2;
  var p;
  var t3_value =
  /*error*/
  ctx[1].message + "";
  var t3;
  var t4;
  var if_block_anchor;
  document.title = title_value =
  /*status*/
  ctx[0];
  var if_block =
  /*dev*/
  ctx[2] &&
  /*error*/
  ctx[1].stack && create_if_block$1(ctx);
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text(
      /*status*/
      ctx[0]);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*status*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "svelte-hc3g3x");
      add_location(h1, file$2, 33, 0, 403);
      attr_dev(p, "class", "svelte-hc3g3x");
      add_location(p, file$2, 35, 0, 422);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, t3);
      insert_dev(target, t4, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*status*/
      1 && title_value !== (title_value =
      /*status*/
      ctx[0])) {
        document.title = title_value;
      }

      if (dirty[0] &
      /*status*/
      1) set_data_dev(t1,
      /*status*/
      ctx[0]);
      if (dirty[0] &
      /*error*/
      2 && t3_value !== (t3_value =
      /*error*/
      ctx[1].message + "")) set_data_dev(t3, t3_value);

      if (
      /*dev*/
      ctx[2] &&
      /*error*/
      ctx[1].stack) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t4);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var status = $$props.status;
  var error = $$props.error;
  var dev = "development" === "development";
  var writable_props = ["status", "error"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Error> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  $$self.$capture_state = function () {
    return {
      status: status,
      error: error
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  return [status, error, dev];
}

var Error$1 =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(Error, _SvelteComponentDev);

  function Error(options) {
    var _this;

    _classCallCheck$1(this, Error);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Error).call(this, options));
    if (!document.getElementById("svelte-hc3g3x-style")) add_css();
    init(_assertThisInitialized$1(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      status: 0,
      error: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Error",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*status*/
    ctx[0] === undefined && !("status" in props)) {
      console.warn("<Error> was created without expected prop 'status'");
    }

    if (
    /*error*/
    ctx[1] === undefined && !("error" in props)) {
      console.warn("<Error> was created without expected prop 'error'");
    }

    return _this;
  }

  _createClass$1(Error, [{
    key: "status",
    get: function get() {
      throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Error;
}(SvelteComponentDev);

var Error_1$1 = globals.Error;

function create_else_block$1(ctx) {
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [
  /*level1*/
  ctx[4].props];
  var switch_value =
  /*level1*/
  ctx[4].component;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props());
  }

  var block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var switch_instance_changes = dirty[0] &
      /*level1*/
      16 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
      /*level1*/
      ctx[4].props)]) : {};

      if (switch_value !== (switch_value =
      /*level1*/
      ctx[4].component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block$1.name,
    type: "else",
    source: "(21:1) {:else}",
    ctx: ctx
  });
  return block;
} // (19:1) {#if error}


function create_if_block$2(ctx) {
  var current;
  var error_1 = new Error$1({
    props: {
      error:
      /*error*/
      ctx[0],
      status:
      /*status*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(error_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(error_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var error_1_changes = {};
      if (dirty[0] &
      /*error*/
      1) error_1_changes.error =
      /*error*/
      ctx[0];
      if (dirty[0] &
      /*status*/
      2) error_1_changes.status =
      /*status*/
      ctx[1];
      error_1.$set(error_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(error_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(error_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(error_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(19:1) {#if error}",
    ctx: ctx
  });
  return block;
} // (18:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot$1(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block$2, create_else_block$1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*error*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot$1.name,
    type: "slot",
    source: "(18:0) <Layout segment=\\\"{segments[0]}\\\" {...level0.props}>",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var current;
  var layout_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][0]
  },
  /*level0*/
  ctx[3].props];
  var layout_props = {
    $$slots: {
      default: [create_default_slot$1]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  var layout = new Layout({
    props: layout_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(layout.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(layout.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var layout_changes = dirty[0] &
      /*segments, level0*/
      12 ? get_spread_update(layout_spread_levels, [dirty[0] &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][0]
      }, dirty[0] &
      /*level0*/
      8 && get_spread_object(
      /*level0*/
      ctx[3].props)]) : {};

      if (dirty[0] &
      /*$$scope, error, status, level1*/
      83) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(layout, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var stores = $$props.stores;
  var error = $$props.error;
  var status = $$props.status;
  var segments = $$props.segments;
  var level0 = $$props.level0;
  var _$$props$level = $$props.level1,
      level1 = _$$props$level === void 0 ? null : _$$props$level;
  setContext(CONTEXT_KEY, stores);
  var writable_props = ["stores", "error", "status", "segments", "level0", "level1"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$set = function ($$props) {
    if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
  };

  $$self.$capture_state = function () {
    return {
      stores: stores,
      error: error,
      status: status,
      segments: segments,
      level0: level0,
      level1: level1
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
  };

  return [error, status, segments, level0, level1, stores];
}

var App =
/*#__PURE__*/
function (_SvelteComponentDev) {
  _inherits$1(App, _SvelteComponentDev);

  function App(options) {
    var _this;

    _classCallCheck$1(this, App);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(App).call(this, options));
    init(_assertThisInitialized$1(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      stores: 5,
      error: 0,
      status: 1,
      segments: 2,
      level0: 3,
      level1: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "App",
      options: options,
      id: create_fragment$3.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*stores*/
    ctx[5] === undefined && !("stores" in props)) {
      console.warn("<App> was created without expected prop 'stores'");
    }

    if (
    /*error*/
    ctx[0] === undefined && !("error" in props)) {
      console.warn("<App> was created without expected prop 'error'");
    }

    if (
    /*status*/
    ctx[1] === undefined && !("status" in props)) {
      console.warn("<App> was created without expected prop 'status'");
    }

    if (
    /*segments*/
    ctx[2] === undefined && !("segments" in props)) {
      console.warn("<App> was created without expected prop 'segments'");
    }

    if (
    /*level0*/
    ctx[3] === undefined && !("level0" in props)) {
      console.warn("<App> was created without expected prop 'level0'");
    }

    return _this;
  }

  _createClass$1(App, [{
    key: "stores",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "status",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "segments",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level0",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level1",
    get: function get() {
      throw new Error_1$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return App;
}(SvelteComponentDev);

// This file is generated by Sapper — do not edit it!
var ignore = [];
var components = [{
  js: function js() {
    return import('./index.ba584233.js');
  },
  css: []
}, {
  js: function js() {
    return import('./top-app-bar-iframe.8f78ac73.js');
  },
  css: []
}, {
  js: function js() {
    return import('./linear-progress.1968bd96.js');
  },
  css: []
}, {
  js: function js() {
    return import('./menu-surface.dd02a50a.js');
  },
  css: []
}, {
  js: function js() {
    return import('./icon-button.ea59da31.js');
  },
  css: []
}, {
  js: function js() {
    return import('./top-app-bar.82f5a4a7.js');
  },
  css: []
}, {
  js: function js() {
    return import('./data-table.00c0dbaf.js');
  },
  css: []
}, {
  js: function js() {
    return import('./image-list.c71a6228.js');
  },
  css: []
}, {
  js: function js() {
    return import('./typography.ddef81b5.js');
  },
  css: []
}, {
  js: function js() {
    return import('./elevation.8cb242f9.js');
  },
  css: []
}, {
  js: function js() {
    return import('./snackbars.58b4de40.js');
  },
  css: []
}, {
  js: function js() {
    return import('./textfield.28b65fcf.js');
  },
  css: []
}, {
  js: function js() {
    return import('./checkbox.481c6bd8.js');
  },
  css: []
}, {
  js: function js() {
    return import('./button.6ac500f6.js');
  },
  css: []
}, {
  js: function js() {
    return import('./dialog.79c13511.js');
  },
  css: []
}, {
  js: function js() {
    return import('./drawer.10c1cd9b.js');
  },
  css: []
}, {
  js: function js() {
    return import('./ripple.bc343298.js');
  },
  css: []
}, {
  js: function js() {
    return import('./select.f9fe2fde.js');
  },
  css: []
}, {
  js: function js() {
    return import('./slider.c5e9523c.js');
  },
  css: []
}, {
  js: function js() {
    return import('./switch.d29de216.js');
  },
  css: []
}, {
  js: function js() {
    return import('./chips.8e857905.js');
  },
  css: []
}, {
  js: function js() {
    return import('./paper.8ea86465.js');
  },
  css: []
}, {
  js: function js() {
    return import('./radio.303903a5.js');
  },
  css: []
}, {
  js: function js() {
    return import('./theme.948fb1a6.js');
  },
  css: []
}, {
  js: function js() {
    return import('./card.afec77b0.js');
  },
  css: []
}, {
  js: function js() {
    return import('./list.c4627a6a.js');
  },
  css: []
}, {
  js: function js() {
    return import('./menu.f4978c31.js');
  },
  css: []
}, {
  js: function js() {
    return import('./tabs.674aac1d.js');
  },
  css: []
}, {
  js: function js() {
    return import('./fab.0db60262.js');
  },
  css: []
}];
var routes = [{
  // index.svelte
  pattern: /^\/$/,
  parts: [{
    i: 0
  }]
}, {
  // demo/top-app-bar-iframe.svelte
  pattern: /^\/demo\/top-app-bar-iframe\/?$/,
  parts: [null, {
    i: 1
  }]
}, {
  // demo/linear-progress.svelte
  pattern: /^\/demo\/linear-progress\/?$/,
  parts: [null, {
    i: 2
  }]
}, {
  // demo/menu-surface.svelte
  pattern: /^\/demo\/menu-surface\/?$/,
  parts: [null, {
    i: 3
  }]
}, {
  // demo/icon-button.svelte
  pattern: /^\/demo\/icon-button\/?$/,
  parts: [null, {
    i: 4
  }]
}, {
  // demo/top-app-bar.svelte
  pattern: /^\/demo\/top-app-bar\/?$/,
  parts: [null, {
    i: 5
  }]
}, {
  // demo/data-table.svelte
  pattern: /^\/demo\/data-table\/?$/,
  parts: [null, {
    i: 6
  }]
}, {
  // demo/image-list.svelte
  pattern: /^\/demo\/image-list\/?$/,
  parts: [null, {
    i: 7
  }]
}, {
  // demo/typography.svelte
  pattern: /^\/demo\/typography\/?$/,
  parts: [null, {
    i: 8
  }]
}, {
  // demo/elevation.svelte
  pattern: /^\/demo\/elevation\/?$/,
  parts: [null, {
    i: 9
  }]
}, {
  // demo/snackbars.svelte
  pattern: /^\/demo\/snackbars\/?$/,
  parts: [null, {
    i: 10
  }]
}, {
  // demo/textfield.svelte
  pattern: /^\/demo\/textfield\/?$/,
  parts: [null, {
    i: 11
  }]
}, {
  // demo/checkbox.svelte
  pattern: /^\/demo\/checkbox\/?$/,
  parts: [null, {
    i: 12
  }]
}, {
  // demo/button.svelte
  pattern: /^\/demo\/button\/?$/,
  parts: [null, {
    i: 13
  }]
}, {
  // demo/dialog.svelte
  pattern: /^\/demo\/dialog\/?$/,
  parts: [null, {
    i: 14
  }]
}, {
  // demo/drawer.svelte
  pattern: /^\/demo\/drawer\/?$/,
  parts: [null, {
    i: 15
  }]
}, {
  // demo/ripple.svelte
  pattern: /^\/demo\/ripple\/?$/,
  parts: [null, {
    i: 16
  }]
}, {
  // demo/select.svelte
  pattern: /^\/demo\/select\/?$/,
  parts: [null, {
    i: 17
  }]
}, {
  // demo/slider.svelte
  pattern: /^\/demo\/slider\/?$/,
  parts: [null, {
    i: 18
  }]
}, {
  // demo/switch.svelte
  pattern: /^\/demo\/switch\/?$/,
  parts: [null, {
    i: 19
  }]
}, {
  // demo/chips.svelte
  pattern: /^\/demo\/chips\/?$/,
  parts: [null, {
    i: 20
  }]
}, {
  // demo/paper.svelte
  pattern: /^\/demo\/paper\/?$/,
  parts: [null, {
    i: 21
  }]
}, {
  // demo/radio.svelte
  pattern: /^\/demo\/radio\/?$/,
  parts: [null, {
    i: 22
  }]
}, {
  // demo/theme.svelte
  pattern: /^\/demo\/theme\/?$/,
  parts: [null, {
    i: 23
  }]
}, {
  // demo/card.svelte
  pattern: /^\/demo\/card\/?$/,
  parts: [null, {
    i: 24
  }]
}, {
  // demo/list.svelte
  pattern: /^\/demo\/list\/?$/,
  parts: [null, {
    i: 25
  }]
}, {
  // demo/menu.svelte
  pattern: /^\/demo\/menu\/?$/,
  parts: [null, {
    i: 26
  }]
}, {
  // demo/tabs.svelte
  pattern: /^\/demo\/tabs\/?$/,
  parts: [null, {
    i: 27
  }]
}, {
  // demo/fab.svelte
  pattern: /^\/demo\/fab\/?$/,
  parts: [null, {
    i: 28
  }]
}];

function goto(href) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    replaceState: false
  };
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null).then(function () {});
  }

  location.href = href;
  return new Promise(function (f) {}); // never resolves
}

var initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
var ready = false;
var root_component;
var current_token;
var root_preloaded;
var current_branch = [];
var current_query = '{}';
var stores = {
  page: writable({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
var $session;
var session_dirty;
stores.session.subscribe(function _callee(value) {
  var target, token, _ref, redirect, props, branch;

  return regenerator.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          $session = value;

          if (ready) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return");

        case 3:
          session_dirty = true;
          target = select_target(new URL(location.href));
          token = current_token = {};
          _context.next = 8;
          return regenerator.awrap(hydrate_target(target));

        case 8:
          _ref = _context.sent;
          redirect = _ref.redirect;
          props = _ref.props;
          branch = _ref.branch;

          if (!(token !== current_token)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return");

        case 14:
          _context.next = 16;
          return regenerator.awrap(render(redirect, branch, props, target.page));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
});
var prefetching = null;

function set_prefetching(href, promise) {
  prefetching = {
    href: href,
    promise: promise
  };
}

var target;

function set_target(element) {
  target = element;
}

var uid = 1;

function set_uid(n) {
  uid = n;
}

var cid;

function set_cid(n) {
  cid = n;
}

var _history = typeof history !== 'undefined' ? history : {
  pushState: function pushState(state, title, href) {},
  replaceState: function replaceState(state, title, href) {},
  scrollRestoration: ''
};

var scroll_history = {};

function extract_query(search) {
  var query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(function (searchParam) {
      var _$exec = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' '))),
          _$exec2 = _slicedToArray(_$exec, 3),
          key = _$exec2[1],
          _$exec2$ = _$exec2[2],
          value = _$exec2$ === void 0 ? '' : _$exec2$;

      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (_typeof(query[key]) === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(initial_data.baseUrl)) return null;
  var path = url.pathname.slice(initial_data.baseUrl.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(function (pattern) {
    return pattern.test(path);
  })) return;

  for (var i = 0; i < routes.length; i += 1) {
    var route = routes[i];
    var match = route.pattern.exec(path);

    if (match) {
      var query = extract_query(url.search);
      var part = route.parts[route.parts.length - 1];
      var params = part.params ? part.params(match) : {};
      var page = {
        host: location.host,
        path: path,
        query: query,
        params: params
      };
      return {
        href: url.href,
        route: route,
        match: match,
        page: page
      };
    }
  }
}

function handle_error(url) {
  var _location = location,
      host = _location.host,
      pathname = _location.pathname,
      search = _location.search;
  var session = initial_data.session,
      preloaded = initial_data.preloaded,
      status = initial_data.status,
      error = initial_data.error;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  var props = {
    error: error,
    status: status,
    session: session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status: status,
        error: error
      },
      component: Error$1
    },
    segments: preloaded
  };
  var query = extract_query(search);
  render(null, [], props, {
    host: host,
    path: pathname,
    query: query,
    params: {}
  });
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function navigate(target, id, noscroll, hash) {
  var current_scroll, loaded, token, _ref2, redirect, props, branch, scroll, deep_linked;

  return regenerator.async(function navigate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (id) {
            // popstate or initial navigation
            cid = id;
          } else {
            current_scroll = scroll_state(); // clicked on a link. preserve scroll state

            scroll_history[cid] = current_scroll;
            id = cid = ++uid;
            scroll_history[cid] = noscroll ? current_scroll : {
              x: 0,
              y: 0
            };
          }

          cid = id;
          if (root_component) stores.preloading.set(true);
          loaded = prefetching && prefetching.href === target.href ? prefetching.promise : hydrate_target(target);
          prefetching = null;
          token = current_token = {};
          _context2.next = 8;
          return regenerator.awrap(loaded);

        case 8:
          _ref2 = _context2.sent;
          redirect = _ref2.redirect;
          props = _ref2.props;
          branch = _ref2.branch;

          if (!(token !== current_token)) {
            _context2.next = 14;
            break;
          }

          return _context2.abrupt("return");

        case 14:
          _context2.next = 16;
          return regenerator.awrap(render(redirect, branch, props, target.page));

        case 16:
          if (document.activeElement) document.activeElement.blur();

          if (!noscroll) {
            scroll = scroll_history[id];

            if (hash) {
              // scroll is an element id (from a hash), we need to compute y.
              deep_linked = document.getElementById(hash.slice(1));

              if (deep_linked) {
                scroll = {
                  x: 0,
                  y: deep_linked.getBoundingClientRect().top
                };
              }
            }

            scroll_history[cid] = scroll;
            if (scroll) scrollTo(scroll.x, scroll.y);
          }

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function render(redirect, branch, props, page) {
  var _start, end;

  return regenerator.async(function render$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!redirect) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", goto(redirect.location, {
            replaceState: true
          }));

        case 2:
          stores.page.set(page);
          stores.preloading.set(false);

          if (!root_component) {
            _context3.next = 8;
            break;
          }

          root_component.$set(props);
          _context3.next = 17;
          break;

        case 8:
          props.stores = {
            page: {
              subscribe: stores.page.subscribe
            },
            preloading: {
              subscribe: stores.preloading.subscribe
            },
            session: stores.session
          };
          _context3.next = 11;
          return regenerator.awrap(root_preloaded);

        case 11:
          _context3.t0 = _context3.sent;
          props.level0 = {
            props: _context3.t0
          };
          // first load — remove SSR'd <head> contents
          _start = document.querySelector('#sapper-head-start');
          end = document.querySelector('#sapper-head-end');

          if (_start && end) {
            while (_start.nextSibling !== end) {
              detach(_start.nextSibling);
            }

            detach(_start);
            detach(end);
          }

          root_component = new App({
            target: target,
            props: props,
            hydrate: true
          });

        case 17:
          current_branch = branch;
          current_query = JSON.stringify(page.query);
          ready = true;
          session_dirty = false;

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  var previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(target) {
  var route, page, segments, _redirect, props, preload_context, branch, l, stringified_query, match, segment_dirty;

  return regenerator.async(function hydrate_target$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          route = target.route, page = target.page;
          segments = page.path.split('/').filter(Boolean);
          _redirect = null;
          props = {
            error: null,
            status: 200,
            segments: [segments[0]]
          };
          preload_context = {
            fetch: function (_fetch) {
              function fetch(_x, _x2) {
                return _fetch.apply(this, arguments);
              }

              fetch.toString = function () {
                return _fetch.toString();
              };

              return fetch;
            }(function (url, opts) {
              return fetch(url, opts);
            }),
            redirect: function redirect(statusCode, location) {
              if (_redirect && (_redirect.statusCode !== statusCode || _redirect.location !== location)) {
                throw new Error("Conflicting redirects");
              }

              _redirect = {
                statusCode: statusCode,
                location: location
              };
            },
            error: function error(status, _error) {
              props.error = typeof _error === 'string' ? new Error(_error) : _error;
              props.status = status;
            }
          };

          if (!root_preloaded) {
            root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
              host: page.host,
              path: page.path,
              query: page.query,
              params: {}
            }, $session);
          }

          l = 1;
          _context5.prev = 7;
          stringified_query = JSON.stringify(page.query);
          match = route.pattern.exec(page.path);
          segment_dirty = false;
          _context5.next = 13;
          return regenerator.awrap(Promise.all(route.parts.map(function _callee2(part, i) {
            var segment, j, _ref3, component, preload, preloaded;

            return regenerator.async(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    segment = segments[i];
                    if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
                    props.segments[l] = segments[i + 1]; // TODO make this less confusing

                    if (part) {
                      _context4.next = 5;
                      break;
                    }

                    return _context4.abrupt("return", {
                      segment: segment
                    });

                  case 5:
                    j = l++;

                    if (!(!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i)) {
                      _context4.next = 8;
                      break;
                    }

                    return _context4.abrupt("return", current_branch[i]);

                  case 8:
                    segment_dirty = false;
                    _context4.next = 11;
                    return regenerator.awrap(load_component(components[part.i]));

                  case 11:
                    _ref3 = _context4.sent;
                    component = _ref3.default;
                    preload = _ref3.preload;

                    if (!(ready || !initial_data.preloaded[i + 1])) {
                      _context4.next = 25;
                      break;
                    }

                    if (!preload) {
                      _context4.next = 21;
                      break;
                    }

                    _context4.next = 18;
                    return regenerator.awrap(preload.call(preload_context, {
                      host: page.host,
                      path: page.path,
                      query: page.query,
                      params: part.params ? part.params(target.match) : {}
                    }, $session));

                  case 18:
                    _context4.t0 = _context4.sent;
                    _context4.next = 22;
                    break;

                  case 21:
                    _context4.t0 = {};

                  case 22:
                    preloaded = _context4.t0;
                    _context4.next = 26;
                    break;

                  case 25:
                    preloaded = initial_data.preloaded[i + 1];

                  case 26:
                    return _context4.abrupt("return", props["level".concat(j)] = {
                      component: component,
                      props: preloaded,
                      segment: segment,
                      match: match,
                      part: part.i
                    });

                  case 27:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          })));

        case 13:
          branch = _context5.sent;
          _context5.next = 21;
          break;

        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](7);
          props.error = _context5.t0;
          props.status = 500;
          branch = [];

        case 21:
          return _context5.abrupt("return", {
            redirect: _redirect,
            props: props,
            branch: branch
          });

        case 22:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[7, 16]]);
}

function load_css(chunk) {
  var href = "client/".concat(chunk);
  if (document.querySelector("link[href=\"".concat(href, "\"]"))) return;
  return new Promise(function (fulfil, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    link.onload = function () {
      return fulfil();
    };

    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function load_component(component) {
  // TODO this is temporary — once placeholders are
  // always rewritten, scratch the ternary
  var promises = typeof component.css === 'string' ? [] : component.css.map(load_css);
  promises.unshift(component.js());
  return Promise.all(promises).then(function (values) {
    return values[0];
  });
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function prefetch(href) {
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      set_prefetching(href, hydrate_target(target));
    }

    return prefetching.promise;
  }
}

function start(opts) {
  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  }

  set_target(opts.target);
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate); // prefetch

  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
  return Promise.resolve().then(function () {
    var _location2 = location,
        hash = _location2.hash,
        href = _location2.href;

    _history.replaceState({
      id: uid
    }, '', href);

    var url = new URL(location.href);
    if (initial_data.error) return handle_error();
    var target = select_target(url);
    if (target) return navigate(target, uid, true, hash);
  });
}

var mousemove_timeout;

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(function () {
    trigger_prefetch(event);
  }, 20);
}

function trigger_prefetch(event) {
  var a = find_anchor(event.target);
  if (!a || a.rel !== 'prefetch') return;
  prefetch(a.href);
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  var a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  var svg = _typeof(a.href) === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  var href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  var url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  var target = select_target(url);

  if (target) {
    var noscroll = a.hasAttribute('sapper-noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') {
    node = node.parentNode;
  } // SVG <a> elements have a lowercase name


  return node;
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    var url = new URL(location.href);

    var _target = select_target(url);

    if (_target) {
      navigate(_target, event.state.id);
    } else {
      location.href = location.href;
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

var stores$1 = function stores$1() {
  return getContext(CONTEXT_KEY);
};

export { stores$1 as a, start as s };
