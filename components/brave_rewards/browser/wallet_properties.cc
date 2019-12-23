/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "brave/components/brave_rewards/browser/wallet_properties.h"

namespace brave_rewards {

  WalletProperties::WalletProperties() = default;

  WalletProperties::~WalletProperties() = default;

  WalletProperties::WalletProperties(const WalletProperties &properties) {
    parameters_choices = properties.parameters_choices;
    default_tip_choices = properties.default_tip_choices;
    default_monthly_tip_choices = properties.default_monthly_tip_choices;
    user_funds_present = properties.user_funds_present;
  }

}  // namespace brave_rewards
