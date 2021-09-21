import * as React from 'react'
import THEME from './THEME'

export class StyleReset extends React.Component {}

// ----- Atoms -----
export function Container(props: React.PropsWithChildren<unknown>): JSX.Element
export function Row(props: React.PropsWithChildren<unknown>): JSX.Element
export function Col(props: React.PropsWithChildren<unknown>): JSX.Element
export function Div(props: React.PropsWithChildren<unknown>): JSX.Element
export function Icon(props: unknown): JSX.Element
export function Text(props: React.PropsWithChildren<unknown>): JSX.Element
export function Button(props: React.PropsWithChildren<unknown>): JSX.Element
export function Input(props: unknown): JSX.Element
export function Textarea(props: unknown): JSX.Element
export function Label(props: React.PropsWithChildren<unknown>): JSX.Element
export function Checkbox(props: unknown): JSX.Element
export function Radiobox(props: unknown): JSX.Element
export function Switch(props: unknown): JSX.Element
export function Image(props: unknown): JSX.Element
export function Tag(props: React.PropsWithChildren<unknown>): JSX.Element
export function Anchor(props: React.PropsWithChildren<unknown>): JSX.Element

// ----- Molecules -----
export class Collapse extends React.Component {}
export class Modal extends React.Component {}
export class SideDrawer extends React.Component {}
export class Notification extends React.Component {}
export class Dropdown extends React.Component {}

// ----- Functions -----
export function scrollTo(
	goTo: string,
	offset?: number,
	goToNumber?: number,
	time?: number,
): void

export function currentDevice():
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| "Couldn't find device"

// ----- Theme -----
export type DefaultTheme = Partial<typeof THEME>

export function ThemeProvider(
	props: React.PropsWithChildren<{ theme: DefaultTheme }>,
): JSX.Element

// ----- IconPaths -----
// @todo: improve props
type IconPath = (props: { [x: string]: any; color: string }) => JSX.Element

export const iconPaths: {
	Add: IconPath
	AlertSolid: IconPath
	Alert: IconPath
	Attachment: IconPath
	Back: IconPath
	Bag: IconPath
	Behance: IconPath
	BookmarkSolid: IconPath
	Bookmark: IconPath
	Bulk: IconPath
	CameraSolid: IconPath
	Camera: IconPath
	Card: IconPath
	Checked: IconPath
	CloseSolid: IconPath
	Close: IconPath
	Cross: IconPath
	DeleteSolid: IconPath
	Delete: IconPath
	Dot: IconPath
	DownArrowCircle: IconPath
	DownArrowSolid: IconPath
	DownArrow: IconPath
	Down: IconPath
	Download: IconPath
	Draft: IconPath
	Dribbble: IconPath
	EditSolid: IconPath
	Edit: IconPath
	Email: IconPath
	Expand: IconPath
	External: IconPath
	EyeSolid: IconPath
	Eye: IconPath
	Facebook: IconPath
	FolderSolid: IconPath
	Folder: IconPath
	Github: IconPath
	HeartSolid: IconPath
	Heart: IconPath
	History: IconPath
	HomeSolid2: IconPath
	HomeSolid: IconPath
	Home: IconPath
	InfoSolid: IconPath
	Info: IconPath
	Instagram: IconPath
	LeftArrowSolid: IconPath
	LeftArrow: IconPath
	LeftUp: IconPath
	Link: IconPath
	Linkedin: IconPath
	Loading: IconPath
	Loading2: IconPath
	Loading3: IconPath
	LocationSolid: IconPath
	Location: IconPath
	LockSolid: IconPath
	Lock: IconPath
	Logout: IconPath
	LongLeft: IconPath
	LongRight: IconPath
	Mail: IconPath
	MasterCard: IconPath
	Menu: IconPath
	MessageSolid: IconPath
	Message: IconPath
	Minus: IconPath
	Next: IconPath
	NotificationSolid: IconPath
	Notification: IconPath
	OptionsVertical: IconPath
	Options: IconPath
	Photo: IconPath
	Pause: IconPath
	Play: IconPath
	PlayNext: IconPath
	PlayPrev: IconPath
	Plus: IconPath
	Power: IconPath
	Print: IconPath
	QuestionSolid: IconPath
	Question: IconPath
	Refresh: IconPath
	RemoveSolid: IconPath
	Remove: IconPath
	Rename: IconPath
	RightArrowSolid: IconPath
	RightArrow: IconPath
	RightUp: IconPath
	Search: IconPath
	SettingsSolid: IconPath
	Settings: IconPath
	StarSolid: IconPath
	Status: IconPath
	Stop: IconPath
	Store: IconPath
	Success: IconPath
	TimestampSolid: IconPath
	Timestamp: IconPath
	Twitter: IconPath
	UpArrowSolid: IconPath
	UpArrow: IconPath
	Up: IconPath
	Upload: IconPath
	UserCircle: IconPath
	UserSolid: IconPath
	User: IconPath
	Visa: IconPath
	CBChecked: IconPath
	CBDisabled: IconPath
	CBIndetermine: IconPath
	CBUnchecked: IconPath
	RBChecked: IconPath
	RBUnchecked: IconPath
}
