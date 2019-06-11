import * as React from 'react';
import styles from './DialogPoc.module.scss';
import { IDialogPocProps } from './IDialogPocProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { getId } from 'office-ui-fabric-react/lib/Utilities';

export interface IDialogBasicExampleState {
  hideDialog: boolean;
}

export default class DialogPoc extends React.Component<IDialogPocProps, IDialogBasicExampleState, {}> {
  public state: IDialogBasicExampleState = {
    hideDialog: true,
  };
  private _labelId: string = getId('dialogLabel');
  private _subTextId: string = getId('subTextLabel');

  public render(): React.ReactElement<IDialogPocProps> {
    const {hideDialog }= this.state;
    return (
      <div className={ styles.dialogPoc }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a> 
              <span>Paras</span>
              <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this._showDialog} text="Open Dialog" />
              <Dialog
                hidden={hideDialog}
                onDismiss={this._closeDialog}
                dialogContentProps={{
                  type: DialogType.normal,
                  title: 'All emails together',
                  subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                }}
                modalProps={{
                  titleAriaId: this._labelId,
                  subtitleAriaId: this._subTextId,
                  isBlocking: false,
                }}
              >

                <DialogFooter>
                  <PrimaryButton onClick={this._closeDialog} text="Save" />
                  <DefaultButton onClick={this._closeDialog} text="Cancel" />
                </DialogFooter>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    );

  }

  _closeDialog=() => {
    console.log('hi');
    this.setState({ hideDialog: true });
  }
  private _showDialog = (): void => {
    this.setState({ hideDialog: false });
  };
}
