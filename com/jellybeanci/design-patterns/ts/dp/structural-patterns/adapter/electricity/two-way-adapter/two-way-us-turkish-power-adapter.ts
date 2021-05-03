import {USPowerSource} from "../domain/us/us-power-source";
import {TurkishPowerSource} from "../domain/tr/turkish-power-source";

export class TwoWayUSTurkishPowerAdapter implements USPowerSource, TurkishPowerSource {
  private usPowerSource: USPowerSource;
  private turkishPowerSource: TurkishPowerSource;

  private on: boolean;

  private powerSource: string;

  private constructor(powerSource: string) {
    this.powerSource = powerSource;
  }

  static tr(turkishPowerSource: TurkishPowerSource): TwoWayUSTurkishPowerAdapter {
    const adapter = new TwoWayUSTurkishPowerAdapter("tr");
    adapter.turkishPowerSource = turkishPowerSource;
    return adapter;
  }

  static us(usPowerSource: USPowerSource): TwoWayUSTurkishPowerAdapter {
    const adapter = new TwoWayUSTurkishPowerAdapter("us");
    adapter.usPowerSource = usPowerSource;
    return adapter;
  }

  providePowerAt110V(): void {
    if (this.powerSource === "us") {
      this.usPowerSource.providePowerAt110V();
    } else {
      this.convert220To110V();
    }
  }

  providePowerAt220V(): void {
    if (this.powerSource === "tr") {
      this.convert110To220V();
    } else {
      this.turkishPowerSource.providePowerAt220V();
    }
  }

  pushSwitch(): void {
    if (!this.on) {
      this.on = true;
      if (this.powerSource === "us") {
        this.usPowerSource.pushSwitch();
      } else {
        this.turkishPowerSource.turnOn();
      }
    } else {
      this.on = false;
      if (this.powerSource === "tr") {
        this.usPowerSource.pushSwitch();
      } else {
        this.turkishPowerSource.turnOff();
      }
    }
  }

  turnOn(): void {
    if (!this.on) {
      if (this.powerSource === "us") {
        this.usPowerSource.pushSwitch();
      } else {
        this.turkishPowerSource.turnOn();
      }
      this.on = true;
    }
  }

  turnOff(): void {
    if (this.on) {
      if (this.powerSource === "us") {
        this.usPowerSource.pushSwitch();
      } else {
        this.turkishPowerSource.turnOff();
      }
      this.on = false;
    }
  }

  private convert110To220V(): void {
    console.log("TwoWayUSTurkishPowerAdapter: Converting from USPowerSource to provide 220V");
  }

  private convert220To110V(): void {
    console.log("TwoWayUSTurkishPowerAdapter: Converting from TurkishPowerSource to provide 110V");
  }
}