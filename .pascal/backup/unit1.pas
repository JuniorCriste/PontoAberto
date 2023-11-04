unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, Forms, Controls, Graphics, Dialogs, StdCtrls, Buttons;

type

  { TFistScreen }

  TFistScreen = class(TForm) ;
  Button1 = class(TButton)
    procedure Button1Click(Sender: TObject);
  private

  public

  end;

var
  FistScreen: TFistScreen;

implementation

{$R *.lfm}

{ TFistScreen }

procedure TFistScreen.Button1Click(Sender: TObject);
begin

end;

end.

