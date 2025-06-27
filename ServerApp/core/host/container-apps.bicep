param name string
param containerAppsEnvironmentName string
param containerRegistryName string
param location string
param tags object
param applicationInsightsName string
param logAnalyticsWorkspaceName string
param containerRegistryAdminUserEnabled bool = true

resource containerAppsEnv 'Microsoft.App/managedEnvironments@2023-05-01' = {
  name: containerAppsEnvironmentName
  location: location
  tags: tags
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalyticsWorkspaceName
        sharedKey: '' // Add if required
      }
    }
    // Add other properties as needed
  }
}

output environmentName string = containerAppsEnv.name
output environmentId string = containerAppsEnv.id
output registryName string = containerRegistryName
output registryLoginServer string = '' // Add logic if you want to output registry login server
