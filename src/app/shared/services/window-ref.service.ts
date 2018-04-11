import { Injectable } from '@angular/core';
function _window(): any {
  // return the global native browser window object
  return window;
}

/**
 * Since Angular 5 does not support the window object. Creating this servive to get a window object
 * Useed in the razorpay payement gateway
 * 
 * @export
 * @class WindowRefService
 */
@Injectable()
export class WindowRefService {
  get nativeWindow(): any {
    return _window();
  }

  reload(){
    this.nativeWindow.location.reload();
  }
}