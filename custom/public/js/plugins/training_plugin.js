import { Dialog, Form, Input, Plugin, PluginButton } from 'myWorld-client';
import editIcon from '../../images/editIcon.svg';

class DialogPlugin extends Plugin {
    static {
        this.prototype.messageGroup = 'DialogPlugin';
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
            //Constructor for the dialog window
            title: 'Form Feature', //Window title
            modal: false, //Is the window modal? (Modal windows prevent interaction with the rest of the page)
            buttons: {
                //List of buttons to be added to the dialog. We will add two buttons without function just as an example for now
                Submit: {
                    text: 'OK',
                    class: 'primary-btn',
                    click: () => {
                        console.log('Submit button clicked');
                        console.log('Name:', this.form.getValue('name'));
                        console.log('Description:', this.form.getValue('description'));
                    }
                }
            },
            autoOpen: false, //Should the dialog automatically open when the application is loaded?
            width: 400 //Window width in pixels
        });
    }

    //This function will create the form to be shown within the dialog
    renderForm(state = {}) {
        this.form = new Form({
            rows: [
                {
                    label: 'Name:',
                    components: [new Input({ name: 'name' })]
                },
                {
                    label: 'Description:',
                    components: [new Input({ name: 'description' })]
                }
            ]
        });

        this.dialog.setContent(this.form.$el); //Adding the form to the dialog created in the constructor
    }

    //This is the function that is called when the toolbar button is pressed
    showDialog() {
        this.renderForm(); //Add the form to the dialog
        this.dialog.open(); //Show the dialog
        // this.ShowObjects.getObjectsFromDatabase();
    }
}

export default DialogPlugin;
