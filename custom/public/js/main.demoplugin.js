// ---------
//  Imports
// ---------
import myw from 'myWorld-client';
import 'main.standard';
// import NewPlugin from './NewPlugin/newPlugin.js';
import DialogPlugin from './plugins/training_plugin.js';

// Add / configure plugins
var plugins = myw.applicationDefinition.plugins;
// plugins['new_plugin'] = NewPlugin;
plugins['dialog_plugin'] = DialogPlugin;
const desktopLayoutDef = myw.applicationDefinition.layouts.desktop;

var desktopToolbarButtons = desktopLayoutDef.controls.toolbar[1].buttons;
// desktopToolbarButtons.push('new_plugin.dialog');
desktopToolbarButtons.push('dialog_plugin.dialog');
