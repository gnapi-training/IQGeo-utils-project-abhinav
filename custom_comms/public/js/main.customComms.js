import '../../../comms/public/js/main.mywcom.js';
import myw from 'myWorld-client';

import CustomPlugin from './comms_plugin.js';

// Add / configure plugins
var plugins = myw.applicationDefinition.plugins;
// plugins['new_plugin'] = NewPlugin;
plugins['custom_plugin'] = CustomPlugin;
const desktopLayoutDef = myw.applicationDefinition.layouts.desktop;

var desktopToolbarButtons = desktopLayoutDef.controls.toolbar[1].buttons;
// desktopToolbarButtons.push('new_plugin.dialog');
desktopToolbarButtons.push('custom_plugin.dialog');
