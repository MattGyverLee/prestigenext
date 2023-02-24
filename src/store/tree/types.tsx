// Describing the shape of the tree's slice of state
export interface Media {
  blobURL: string;
  extension: string;
  hasAnnotation: boolean;
  isAnnotation: boolean;
  isMerged: boolean;
  inMilestones: boolean;
  mimeType: string;
  name: string;
  path: string;
  wsAllowed: boolean;
  waveform: boolean | string;
}

export interface TreeState {
  env: string;
  folderPath: string;
  folderName: string;
  loaded: boolean;
  availableFiles: any[];
  sourceMedia: Media[];
  annotMedia: Media[];
  prevPath: string;
}

export interface Wavein {
  ref: string;
  sourceAnnot: boolean;
  // True: Source
  wavedata: boolean | string | any;
  // Todo: change to FLOAT32 array: 
  /* The WaveSurfer.exportPCM() method returns a Float32Array object, which represents the audio data in a binary format. To convert this binary data to a string, you can use the TextDecoder API.

Here's an example of how to convert the Float32Array returned by WaveSurfer.exportPCM() to a string:

js
Copy code
const pcmData = this.waveSurfers[idx].exportPCM(1024, 10000, true); // assuming waveSurfers is an array of WaveSurfer instances
const decoder = new TextDecoder();
const pcmString = decoder.decode(pcmData);
In this example, pcmData is the Float32Array returned by WaveSurfer.exportPCM(), decoder is a new instance of TextDecoder, and pcmString is the converted string.

Note that the decode() method of TextDecoder assumes that the input is encoded using UTF-8 by default. If your data is encoded using a different character set, you may need to pass an appropriate encoding to the TextDecoder constructor. For example, if your data is encoded using ISO-8859-1, you can pass 'iso-8859-1' as the encoding:

js
Copy code
const decoder = new TextDecoder('iso-8859-1');
I hope that helps! Let me know if you have any other questions. */

}
export interface Folders {
  folderName: string;
  folderPath: string;
}

export interface FileDesc {
  file: any;
}

export interface PairPathURL {
  blobURL: string;
  blobPath: string;
}

// Describing the different ACTION NAMES available
export const UPDATE_TREE = "UPDATE_TREE";
export const UPDATE_ACTIVE_FOLDER = "UPDATE_ACTIVE_FOLDER";
export const FILE_ADDED = "FILE_ADDED";
export const SOURCE_MEDIA_ADDED = "SOURCE_MEDIA_ADDED";
export const ANNOT_MEDIA_ADDED = "ANNOT_MEDIA_ADDED";
export const FILE_CHANGED = "FILE_CHANGED";
export const SOURCE_MEDIA_CHANGED = "SOURCE_MEDIA_CHANGED";
export const ANNOT_MEDIA_CHANGED = "ANNOT_MEDIA_CHANGED";
export const FILE_DELETED = "FILE_DELETED";
export const HARD_RESET_APP = "HARD_RESET_APP";
export const ON_NEW_FOLDER = "ON_NEW_FOLDER";
export const ON_RELOAD_FOLDER = "ON_RELOAD_FOLDER";
export const CHANGE_PREV_PATH = "CHANGE_PREV_PATH";
export const SET_ANNOT_MEDIA_IN_MILESTONES = "SET_ANNOT_MEDIA_IN_MILESTONES";
export const SET_ANNOT_MEDIA_WS_ALLOWED = "SET_ANNOT_MEDIA_WS_ALLOWED";
export const SET_SOURCE_MEDIA_WS_ALLOWED = "SET_SOURCE_MEDIA_WS_ALLOWED";
export const LOAD_TREE = "LOAD_TREE";
export const WAVEFORM_ADDED = "WAVEFORM_ADDED";

interface TreeHardResetApp {
  type: typeof HARD_RESET_APP;
  payload: string;
}

interface TreeOnNewFolder {
  type: typeof ON_NEW_FOLDER;
  payload: string;
}

interface TreeOnReloadFolder {
  type: typeof ON_RELOAD_FOLDER;
  payload: string;
}

interface UpdateTree {
  type: typeof UPDATE_TREE;
  payload: TreeState;
}

interface LoadTree {
  type: typeof LOAD_TREE;
  payload: TreeState;
}

interface UpdateActiveFolder {
  // deprecate
  type: typeof UPDATE_ACTIVE_FOLDER;
  payload: Folders;
}
interface FileAdded {
  type: typeof FILE_ADDED;
  payload: FileDesc;
}
interface SourceMediaAdded {
  type: typeof SOURCE_MEDIA_ADDED;
  payload: FileDesc;
}
interface AnnotMediaAdded {
  type: typeof ANNOT_MEDIA_ADDED;
  payload: FileDesc;
}
interface FileChanged {
  type: typeof FILE_CHANGED;
  payload: FileDesc;
}
interface SourceMediaChanged {
  type: typeof SOURCE_MEDIA_CHANGED;
  payload: FileDesc;
}
interface AnnotMediaChanged {
  type: typeof ANNOT_MEDIA_CHANGED;
  payload: FileDesc;
}
interface WaveformAdded {
  type: typeof WAVEFORM_ADDED;
  payload: Wavein;
}
interface FileDeleted {
  type: typeof FILE_DELETED;
  payload: string;
}
interface ChangePrevPath {
  type: typeof CHANGE_PREV_PATH;
  payload: string;
}
interface SetAnnotMediaInMilestones {
  type: typeof SET_ANNOT_MEDIA_IN_MILESTONES;
  payload: string;
}

interface SetAnnotMediaWSAllowed {
  type: typeof SET_ANNOT_MEDIA_WS_ALLOWED;
  payload: string;
}

interface SetSourceMediaWSAllowed {
  type: typeof SET_SOURCE_MEDIA_WS_ALLOWED;
  payload: string;
}

export type TreeActionTypes =
  | FileAdded
  | FileChanged
  | FileDeleted
  | SourceMediaAdded
  | AnnotMediaAdded
  | SourceMediaChanged
  | AnnotMediaChanged
  | UpdateActiveFolder
  | TreeHardResetApp
  | TreeOnNewFolder
  | TreeOnReloadFolder
  | UpdateTree
  | ChangePrevPath
  | SetAnnotMediaInMilestones
  | SetAnnotMediaWSAllowed
  | SetSourceMediaWSAllowed
  | LoadTree
  | WaveformAdded;
