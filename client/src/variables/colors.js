const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`
const grayScale = v => rgb(v, v, v)

module.exports = {
  // ------------------------------------
  // Colors
  // ------------------------------------
  //
  'color-anakiwa': rgb(128, 209, 255), // #80D1FF
  'color-curious-blue': rgb(45, 156, 219), // #2D9CDB
  'color-burnt-sienna': rgb(235, 87, 87), // #EB5757
  'color-sanguine-brown': rgb(153, 57, 57), // #993939
  'color-de-york': rgb(111, 207, 151), // #6FCF97
  'color-jungle-green': rgb(39, 174, 96), // #27AE60
  'color-cream-can': rgb(242, 201, 76), // #F2C94C
  'color-jaffa': rgb(242, 153, 74), // #F2994A

  // ------------------------------------
  // Grayscale
  // ------------------------------------
  'color-black': grayScale(0), // #000000
  'color-mine-shaft': grayScale(51), // #333333
  'color-dove-gray': grayScale(82), // #828282
  'color-dusty-gray': grayScale(153), // #999999
  'color-silver': grayScale(189), // #
  'color-alto': grayScale(220), // #dcdcdc
  'color-gallery': grayScale(238), // #eeeeee
  'color-concrete': grayScale(242), // #f2f2f2
  'color-alabaster': grayScale(248), // #f8f8f8
  'color-white': grayScale(255), // #ffffff
}
