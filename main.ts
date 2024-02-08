let aantal_leds = 0
let ledstrip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
ledstrip.clear()
let range = ledstrip.range(0, 0)
let lichtsensor = pins.analogReadPin(AnalogPin.P0)
/**
 * Je hebt het volgende nodig om dit te laten werken:
 * 
 * - Neopixel library toevoegen (via uitbreidingen)
 * 
 * - Grove inventor kit
 * 
 * - Uit de Grove inventor kit heb je grove shield, de ledstrip en de lightsensor nodig
 * 
 * - Lightsensor sluit je aan op P0 op de shield
 * 
 * - Ledstrip sluit je aan op P2 op de shield
 */
basic.forever(function () {
    ledstrip.clear()
    lichtsensor = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("gemeten waarde", lichtsensor)
    aantal_leds = Math.map(lichtsensor, 0, 630, 0, 30)
    range = ledstrip.range(0, aantal_leds)
    serial.writeValue("aantal aan te sturen leds", aantal_leds)
    if (aantal_leds < 10) {
        range.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (aantal_leds >= 10 && aantal_leds < 25) {
        range.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else {
        range.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    basic.pause(100)
})
