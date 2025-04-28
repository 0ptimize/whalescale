"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function AlertsSettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-light mb-8">Alert Settings</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive alerts via email</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Telegram Notifications</Label>
                <p className="text-sm text-gray-500">Receive alerts via Telegram</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Discord Notifications</Label>
                <p className="text-sm text-gray-500">Receive alerts via Discord</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert Thresholds</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>BTC Transaction Threshold</Label>
              <Input type="number" placeholder="Enter amount in BTC" />
            </div>

            <div className="space-y-2">
              <Label>ETH Transaction Threshold</Label>
              <Input type="number" placeholder="Enter amount in ETH" />
            </div>

            <div className="space-y-2">
              <Label>USD Value Threshold</Label>
              <Input type="number" placeholder="Enter amount in USD" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entity Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Track Known Entities</Label>
                <p className="text-sm text-gray-500">Receive alerts for known whale entities</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>New Entity Detection</Label>
                <p className="text-sm text-gray-500">Alert when new whale entities are detected</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  )
} 