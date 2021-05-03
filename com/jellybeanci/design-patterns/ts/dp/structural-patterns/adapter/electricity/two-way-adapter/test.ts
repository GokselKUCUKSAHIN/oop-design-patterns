import {USPowerSource} from "../domain/us/us-power-source";
import {USPowerProvider} from "../domain/us/us-power-provider";
import {TwoWayUSTurkishPowerAdapter} from "./two-way-us-turkish-power-adapter";
import {TurkishHomeAppliance} from "../domain/tr/turkish-home-appliance";
import {Appliance} from "../domain/tr/appliance";
import {TurkishPowerSource} from "../domain/tr/turkish-power-source";
import {TurkishPowerProvider} from "../domain/tr/turkish-power-provider";
import {UsHomeAppliance} from "../domain/us/us-home-appliance";

export class Test {
  static main() {
    // In US with Turkish home appliance
    const usPowerSource: USPowerSource = new USPowerProvider();
    const twoWayUSTurkishPowerAdapter1 = TwoWayUSTurkishPowerAdapter.us(usPowerSource);

    console.log("\n");

    const turkishMixer: Appliance = new TurkishHomeAppliance("Mixer");
    turkishMixer.setPowerSource(twoWayUSTurkishPowerAdapter1);
    turkishMixer.start();
    turkishMixer.stop();

    console.log("\n");

    // In Turkey with US home appliance
    const turkishPowerSource: TurkishPowerSource = new TurkishPowerProvider();
    const twoWayUSTurkishPowerAdapter2 = TwoWayUSTurkishPowerAdapter.tr(turkishPowerSource);

    console.log("\n");

    const usBroom = new UsHomeAppliance("Broom");
    usBroom.setPowerSource(twoWayUSTurkishPowerAdapter2);
    usBroom.start();
    usBroom.stop();
  }
}

Test.main();