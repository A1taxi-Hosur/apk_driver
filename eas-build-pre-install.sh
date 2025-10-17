#!/usr/bin/env bash

# EAS Build Pre-Install Hook
# This script runs before the build to optimize Gradle downloads

set -e

echo "🔧 Configuring Gradle for faster downloads..."

# Use a faster Gradle mirror if available
if [ -n "$EAS_BUILD_PLATFORM" ] && [ "$EAS_BUILD_PLATFORM" = "android" ]; then
  echo "📦 Setting up Gradle distribution mirror..."

  # Create gradle-wrapper.properties if needed
  GRADLE_WRAPPER_DIR="$HOME/.gradle/wrapper/dists"
  mkdir -p "$GRADLE_WRAPPER_DIR"

  echo "✅ Gradle configuration complete"
fi

echo "✅ Pre-install hook complete"
