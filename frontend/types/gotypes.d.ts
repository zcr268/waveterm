// Copyright 2024, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

// generated by cmd/generate/main-generatets.go

declare global {

    // waveobj.Block
    type Block = WaveObj & {
        blockdef: BlockDef;
        runtimeopts?: RuntimeOpts;
        stickers?: StickerType[];
    };

    // blockcontroller.BlockControllerRuntimeStatus
    type BlockControllerRuntimeStatus = {
        blockid: string;
        shellprocstatus?: string;
        shellprocconnname?: string;
    };

    // waveobj.BlockDef
    type BlockDef = {
        files?: {[key: string]: FileDef};
        meta?: MetaType;
    };

    // webcmd.BlockInputWSCommand
    type BlockInputWSCommand = {
        wscommand: "blockinput";
        blockid: string;
        inputdata64: string;
    };

    // waveobj.Client
    type Client = WaveObj & {
        windowids: string[];
        tosagreed?: number;
        historymigrated?: boolean;
    };

    // wshrpc.CommandAppendIJsonData
    type CommandAppendIJsonData = {
        zoneid: string;
        filename: string;
        data: {[key: string]: any};
    };

    // wshrpc.CommandAuthenticateRtnData
    type CommandAuthenticateRtnData = {
        routeid: string;
    };

    // wshrpc.CommandBlockInputData
    type CommandBlockInputData = {
        blockid: string;
        inputdata64?: string;
        signame?: string;
        termsize?: TermSize;
    };

    // wshrpc.CommandBlockSetViewData
    type CommandBlockSetViewData = {
        blockid: string;
        view: string;
    };

    // wshrpc.CommandControllerResyncData
    type CommandControllerResyncData = {
        forcerestart?: boolean;
        tabid: string;
        blockid: string;
        rtopts?: RuntimeOpts;
    };

    // wshrpc.CommandCreateBlockData
    type CommandCreateBlockData = {
        tabid: string;
        blockdef: BlockDef;
        rtopts?: RuntimeOpts;
        magnified?: boolean;
    };

    // wshrpc.CommandDeleteBlockData
    type CommandDeleteBlockData = {
        blockid: string;
    };

    // wshrpc.CommandEventReadHistoryData
    type CommandEventReadHistoryData = {
        event: string;
        scope: string;
        maxitems: number;
    };

    // wshrpc.CommandFileData
    type CommandFileData = {
        zoneid: string;
        filename: string;
        data64?: string;
    };

    // wshrpc.CommandGetMetaData
    type CommandGetMetaData = {
        oref: ORef;
    };

    // wshrpc.CommandMessageData
    type CommandMessageData = {
        oref: ORef;
        message: string;
    };

    // wshrpc.CommandRemoteStreamFileData
    type CommandRemoteStreamFileData = {
        path: string;
        byterange?: string;
    };

    // wshrpc.CommandRemoteStreamFileRtnData
    type CommandRemoteStreamFileRtnData = {
        fileinfo?: FileInfo[];
        data64?: string;
    };

    // wshrpc.CommandRemoteWriteFileData
    type CommandRemoteWriteFileData = {
        path: string;
        data64: string;
        createmode?: number;
    };

    // wshrpc.CommandResolveIdsData
    type CommandResolveIdsData = {
        blockid: string;
        ids: string[];
    };

    // wshrpc.CommandResolveIdsRtnData
    type CommandResolveIdsRtnData = {
        resolvedids: {[key: string]: ORef};
    };

    // wshrpc.CommandSetMetaData
    type CommandSetMetaData = {
        oref: ORef;
        meta: MetaType;
    };

    // wconfig.ConfigError
    type ConfigError = {
        file: string;
        err: string;
    };

    // wshrpc.ConnStatus
    type ConnStatus = {
        status: string;
        connection: string;
        connected: boolean;
        hasconnected: boolean;
        activeconnnum: number;
        error?: string;
    };

    // wshrpc.CpuDataRequest
    type CpuDataRequest = {
        id: string;
        count: number;
    };

    // waveobj.FileDef
    type FileDef = {
        filetype?: string;
        path?: string;
        url?: string;
        content?: string;
        meta?: {[key: string]: any};
    };

    // wshrpc.FileInfo
    type FileInfo = {
        path: string;
        dir: string;
        name: string;
        notfound?: boolean;
        size: number;
        mode: number;
        modestr: string;
        modtime: number;
        isdir?: boolean;
        mimetype?: string;
        readonly?: boolean;
    };

    // filestore.FileOptsType
    type FileOptsType = {
        maxsize?: number;
        circular?: boolean;
        ijson?: boolean;
        ijsonbudget?: number;
    };

    // wconfig.FullConfigType
    type FullConfigType = {
        settings: SettingsType;
        mimetypes: {[key: string]: MimeTypeConfigType};
        defaultwidgets: {[key: string]: WidgetConfigType};
        widgets: {[key: string]: WidgetConfigType};
        presets: {[key: string]: MetaType};
        termthemes: {[key: string]: TermThemeType};
        configerrors: ConfigError[];
    };

    // fileservice.FullFile
    type FullFile = {
        info: FileInfo;
        data64: string;
    };

    // waveobj.LayoutActionData
    type LayoutActionData = {
        actiontype: string;
        blockid: string;
        nodesize?: number;
        indexarr?: number[];
        focused: boolean;
        magnified: boolean;
    };

    // waveobj.LayoutState
    type LayoutState = WaveObj & {
        rootnode?: any;
        magnifiednodeid?: string;
        focusednodeid?: string;
        leaforder?: LeafOrderEntry[];
        pendingbackendactions?: LayoutActionData[];
    };

    // waveobj.LeafOrderEntry
    type LeafOrderEntry = {
        nodeid: string;
        blockid: string;
    };

    // waveobj.MetaTSType
    type MetaType = {
        view?: string;
        controller?: string;
        title?: string;
        file?: string;
        url?: string;
        connection?: string;
        edit?: boolean;
        history?: string[];
        "history:forward"?: string[];
        "display:name"?: string;
        "display:order"?: number;
        icon?: string;
        "icon:color"?: string;
        frame?: boolean;
        "frame:*"?: boolean;
        "frame:bordercolor"?: string;
        "frame:bordercolor:focused"?: string;
        cmd?: string;
        "cmd:*"?: boolean;
        "cmd:interactive"?: boolean;
        "cmd:login"?: boolean;
        "cmd:runonstart"?: boolean;
        "cmd:clearonstart"?: boolean;
        "cmd:clearonrestart"?: boolean;
        "cmd:env"?: {[key: string]: string};
        "cmd:cwd"?: string;
        "cmd:nowsh"?: boolean;
        "graph:*"?: boolean;
        "graph:numpoints"?: number;
        "graph:metrics"?: string[];
        bg?: string;
        "bg:*"?: boolean;
        "bg:opacity"?: number;
        "bg:blendmode"?: string;
        "term:*"?: boolean;
        "term:fontsize"?: number;
        "term:fontfamily"?: string;
        "term:mode"?: string;
        "term:theme"?: string;
        count?: number;
    };

    // tsgenmeta.MethodMeta
    type MethodMeta = {
        Desc: string;
        ArgNames: string[];
        ReturnDesc: string;
    };

    // wconfig.MimeTypeConfigType
    type MimeTypeConfigType = {
        icon: string;
        color: string;
    };

    // waveobj.ORef
    type ORef = string;

    // wshrpc.OpenAIOptsType
    type OpenAIOptsType = {
        model: string;
        apitoken: string;
        baseurl?: string;
        maxtokens?: number;
        maxchoices?: number;
        timeout?: number;
    };

    // wshrpc.OpenAIPacketType
    type OpenAIPacketType = {
        type: string;
        model?: string;
        created?: number;
        finish_reason?: string;
        usage?: OpenAIUsageType;
        index?: number;
        text?: string;
        error?: string;
    };

    // wshrpc.OpenAIPromptMessageType
    type OpenAIPromptMessageType = {
        role: string;
        content: string;
        name?: string;
    };

    // wshrpc.OpenAIUsageType
    type OpenAIUsageType = {
        prompt_tokens?: number;
        completion_tokens?: number;
        total_tokens?: number;
    };

    // wshrpc.OpenAiStreamRequest
    type OpenAiStreamRequest = {
        clientid?: string;
        opts: OpenAIOptsType;
        prompt: OpenAIPromptMessageType[];
    };

    // waveobj.Point
    type Point = {
        x: number;
        y: number;
    };

    // wshutil.RpcMessage
    type RpcMessage = {
        command?: string;
        reqid?: string;
        resid?: string;
        timeout?: number;
        route?: string;
        source?: string;
        cont?: boolean;
        cancel?: boolean;
        error?: string;
        datatype?: string;
        data?: any;
    };

    // wshrpc.RpcOpts
    type RpcOpts = {
        timeout?: number;
        noresponse?: boolean;
        route?: string;
    };

    // waveobj.RuntimeOpts
    type RuntimeOpts = {
        termsize?: TermSize;
        winsize?: WinSize;
    };

    // webcmd.SetBlockTermSizeWSCommand
    type SetBlockTermSizeWSCommand = {
        wscommand: "setblocktermsize";
        blockid: string;
        termsize: TermSize;
    };

    // wconfig.SettingsType
    type SettingsType = {
        "ai:*"?: boolean;
        "ai:baseurl"?: string;
        "ai:apitoken"?: string;
        "ai:name"?: string;
        "ai:model"?: string;
        "ai:maxtokens"?: number;
        "ai:timeoutms"?: number;
        "term:*"?: boolean;
        "term:fontsize"?: number;
        "term:fontfamily"?: string;
        "term:disablewebgl"?: boolean;
        "editor:minimapenabled"?: boolean;
        "editor:stickyscrollenabled"?: boolean;
        "web:*"?: boolean;
        "web:openlinksinternally"?: boolean;
        "blockheader:*"?: boolean;
        "blockheader:showblockids"?: boolean;
        "autoupdate:*"?: boolean;
        "autoupdate:enabled"?: boolean;
        "autoupdate:intervalms"?: number;
        "autoupdate:installonquit"?: boolean;
        "autoupdate:channel"?: string;
        "widget:*"?: boolean;
        "widget:showhelp"?: boolean;
        "window:*"?: boolean;
        "window:transparent"?: boolean;
        "window:blur"?: boolean;
        "window:opacity"?: number;
        "window:bgcolor"?: string;
        "window:reducedmotion"?: boolean;
        "window:tilegapsize"?: number;
        "telemetry:*"?: boolean;
        "telemetry:enabled"?: boolean;
    };

    // waveobj.StickerClickOptsType
    type StickerClickOptsType = {
        sendinput?: string;
        createblock?: BlockDef;
    };

    // waveobj.StickerDisplayOptsType
    type StickerDisplayOptsType = {
        icon: string;
        imgsrc: string;
        svgblob?: string;
    };

    // waveobj.StickerType
    type StickerType = {
        stickertype: string;
        style: {[key: string]: any};
        clickopts?: StickerClickOptsType;
        display: StickerDisplayOptsType;
    };

    // wps.SubscriptionRequest
    type SubscriptionRequest = {
        event: string;
        scopes?: string[];
        allscopes?: boolean;
    };

    // waveobj.Tab
    type Tab = WaveObj & {
        name: string;
        layoutstate: string;
        blockids: string[];
    };

    // waveobj.TermSize
    type TermSize = {
        rows: number;
        cols: number;
    };

    // wconfig.TermThemeType
    type TermThemeType = {
        "display:name": string;
        "display:order": number;
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        brightBlack: string;
        brightRed: string;
        brightGreen: string;
        brightYellow: string;
        brightBlue: string;
        brightMagenta: string;
        brightCyan: string;
        brightWhite: string;
        gray: string;
        cmdtext: string;
        foreground: string;
        selectionBackground: string;
        background: string;
        cursorAccent: string;
    };

    // wshrpc.TimeSeriesData
    type TimeSeriesData = {
        ts: number;
        values: {[key: string]: number};
    };

    // waveobj.UIContext
    type UIContext = {
        windowid: string;
        activetabid: string;
    };

    // userinput.UserInputRequest
    type UserInputRequest = {
        requestid: string;
        querytext: string;
        responsetype: string;
        title: string;
        markdown: boolean;
        timeoutms: number;
        checkboxmsg: string;
        publictext: boolean;
    };

    // userinput.UserInputResponse
    type UserInputResponse = {
        type: string;
        requestid: string;
        text?: string;
        confirm?: boolean;
        errormsg?: string;
        checkboxstat?: boolean;
    };

    // vdom.Elem
    type VDomElem = {
        id?: string;
        tag: string;
        props?: {[key: string]: any};
        children?: VDomElem[];
        text?: string;
    };

    // vdom.VDomFuncType
    type VDomFuncType = {
        #func: string;
        #stopPropagation?: boolean;
        #preventDefault?: boolean;
        #keys?: string[];
    };

    // vdom.VDomRefType
    type VDomRefType = {
        #ref: string;
        current: any;
    };

    type WSCommandType = {
        wscommand: string;
    } & ( SetBlockTermSizeWSCommand | BlockInputWSCommand | WSRpcCommand );

    // eventbus.WSEventType
    type WSEventType = {
        eventtype: string;
        oref?: string;
        data: any;
    };

    // wps.WSFileEventData
    type WSFileEventData = {
        zoneid: string;
        filename: string;
        fileop: string;
        data64: string;
    };

    // webcmd.WSRpcCommand
    type WSRpcCommand = {
        wscommand: "rpc";
        message: RpcMessage;
    };

    // wconfig.WatcherUpdate
    type WatcherUpdate = {
        fullconfig: FullConfigType;
    };

    // wps.WaveEvent
    type WaveEvent = {
        event: string;
        scopes?: string[];
        sender?: string;
        persist?: number;
        data?: any;
    };

    // filestore.WaveFile
    type WaveFile = {
        zoneid: string;
        name: string;
        opts: FileOptsType;
        createdts: number;
        size: number;
        modts: number;
        meta: {[key: string]: any};
    };

    // waveobj.WaveObj
    type WaveObj = {
        otype: string;
        oid: string;
        version: number;
        meta: MetaType;
    };

    // waveobj.WaveObjUpdate
    type WaveObjUpdate = {
        updatetype: string;
        otype: string;
        oid: string;
        obj?: WaveObj;
    };

    // waveobj.Window
    type WaveWindow = WaveObj & {
        workspaceid: string;
        activetabid: string;
        pos: Point;
        winsize: WinSize;
        lastfocusts: number;
    };

    // service.WebCallType
    type WebCallType = {
        service: string;
        method: string;
        uicontext?: UIContext;
        args: any[];
    };

    // service.WebReturnType
    type WebReturnType = {
        success?: boolean;
        error?: string;
        data?: any;
        updates?: WaveObjUpdate[];
    };

    // wconfig.WidgetConfigType
    type WidgetConfigType = {
        "display:order"?: number;
        icon?: string;
        color?: string;
        label?: string;
        description?: string;
        blockdef: BlockDef;
    };

    // waveobj.WinSize
    type WinSize = {
        width: number;
        height: number;
    };

    // waveobj.Workspace
    type Workspace = WaveObj & {
        name: string;
        tabids: string[];
    };

    // wshrpc.WshServerCommandMeta
    type WshServerCommandMeta = {
        commandtype: string;
    };

}

export {}
