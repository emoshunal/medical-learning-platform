import { MoreVertical } from "@tamagui/lucide-icons"
import React, { useState } from "react"
import { Action, ActionSheet } from "./action-sheets"
import { IconButton } from "./icon-button"

type ThreeDotsMenuProps = {
  actions: Action[]
}

export function ThreeDotsMenu({ actions }: ThreeDotsMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton icon={MoreVertical} onPress={() => setOpen(true)} />
      <ActionSheet open={open} onOpenChange={setOpen} actions={actions} />
    </>
  )
}
