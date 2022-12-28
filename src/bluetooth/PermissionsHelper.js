import { PermissionsAndroid } from 'react-native'

export const ManagePermissions = async () => {
  const permissions = [
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
  ]

  for (const permission of permissions) {
    await PermissionsAndroid.check(permission).then(async (result) => {
      if (result) {
        console.log(`Permission ${permission} is OK`)
      } else {
        await PermissionsAndroid.request(permission)
      }
    })
  }
}
