# A clock that represents the time as hex color values

> *But forked to use streams*

I've been reading up a lot on [RxJS](https://github.com/ReactiveX/rxjs) and [Ramda](https://github.com/ramda/ramda) and decided it'd be fun to quickly try to edit Jamel's clock to use streams.

This also uses [HyperHTML](https://github.com/WebReflection/hyperHTML) which I think is a neat alternative to using a feature-full framework like React or Vue

### I'm aware it's overkill

Pulling in ~45kb from two libraries to replace what was about 6 lines of vanilla js is definitely overkill. I wouldn't do that if I was working on something I was actually deploying. I just thought it'd be fun 

### Original

Original vanilla js clock here: https://github.com/JamelHammoud/hextime