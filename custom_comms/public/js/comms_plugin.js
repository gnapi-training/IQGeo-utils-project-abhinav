import { Dialog, Plugin, PluginButton } from 'myWorld-client';
import editIcon from '../../../custom/public/images/editIcon.svg';

class CustomPlugin extends Plugin {
    static {
        this.prototype.messageGroup = 'CustomPlugin';
        this.prototype.buttons = {
            dialog: class extends PluginButton {
                static {
                    this.prototype.titleMsg = 'title';
                    this.prototype.imgSrc = editIcon;
                }

                action() {
                    this.owner.showDialog();
                }
            }
        };
    }

    constructor(owner, options) {
        super(owner, options);

        this.dialog = new Dialog({
            title: 'Custom Plugin',
            modal: false,
            buttons: {
                Close: {
                    text: 'Close',
                    class: 'primary-btn',
                    click: () => {
                        this.dialog.close();
                    }
                }
            },
            autoOpen: false,
            width: 400
        });
    }

    // Set the message content for the dialog
    renderContent() {
        const content = document.createElement('div');
        content.style.padding = '20px';
        content.style.textAlign = 'center';
        content.innerHTML = '<h3>Custom Plugin Created</h3>';

        this.dialog.setContent(content);
    }

    // Called when the toolbar button is clicked
    showDialog() {
        this.renderContent();
        this.dialog.open();
    }
}

export default CustomPlugin;
