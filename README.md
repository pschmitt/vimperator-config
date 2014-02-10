# vimperator-config

Config files for vimperator

## Installation

```bash
git clone --recursive https://github.com/pschmitt/vimperator-config.git $XDG_CONFIG_HOME/vimperator
```

Make sure to export these two variables:

```bash
export VIMPERATOR_RUNTIME="$XDG_CONFIG_HOME/vimperator"
export VIMPERATOR_INIT=":source $VIMPERATOR_RUNTIME/vimperatorrc"
```
