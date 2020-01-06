export default {
  distanceFrom: function (latLng1, latLng2) {
    let EarthRadiusMeters = 6378137.0 // meters
    let lat1 = latLng1.lat()
    let lon1 = latLng1.lng()
    let lat2 = latLng2.lat()
    let lon2 = latLng2.lng()
    let dLat = (lat2 - lat1) * Math.PI / 180
    let dLon = (lon2 - lon1) * Math.PI / 180
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    let d = EarthRadiusMeters * c
    return d
  },
  getPointsAtDistance: function (meters, polyline) {
    let next = meters
    let points = []

    if (meters <= 0) return points

    let dist = 0
    let olddist = 0

    for (let i = 1; (i < polyline.getPath().getLength()); i++) {
      olddist = dist
      dist += this.distanceFrom(polyline.getPath().getAt(i), polyline.getPath().getAt(i - 1))

      while (dist > next) {
        let p1 = polyline.getPath().getAt(i-1)
        let p2 = polyline.getPath().getAt(i)
        let m = (next - olddist) / (dist - olddist)
        points.push(new google.maps.LatLng(p1.lat() + (p2.lat() - p1.lat()) * m, p1.lng() + (p2.lng() - p1.lng()) * m))
        next += meters
      }
    }

    return points
  }
}
