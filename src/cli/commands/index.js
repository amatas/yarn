/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

import * as runScript from "./run-script.js";
export { runScript };
import * as uninstall from "./uninstall.js";
export { uninstall };
import * as install from "./install.js";
export { install };
import * as update from "./update.js";
export { update };

import buildUseless from "./_useless.js";

export let lockfile = buildUseless(
  "The lockfile command isn't necessary. `kpm install` will produce a lockfile."
);

export let dedupe   = buildUseless(
  "The dedupe command isn't necessary. `kpm install` will already dedupe."
);

export let prune    = buildUseless(
  "The prune command isn't necessary. `kpm install` will now automatically prune extraneous packages."
);

import buildExecuteLifecycleScript from "./_execute-lifecycle-script.js";
export let restart = buildExecuteLifecycleScript("restart");
export let start   = buildExecuteLifecycleScript("start");
export let test    = buildExecuteLifecycleScript("test");
export let stop    = buildExecuteLifecycleScript("stop");
