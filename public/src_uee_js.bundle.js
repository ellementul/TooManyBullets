/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/characters.yaml":
/*!************************************!*\
  !*** ./src/assets/characters.yaml ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{name:'Bob',hp:100,speed:1400,hitBox:{width:150,height:300}}]);\n\n//# sourceURL=webpack://tmb-host/./src/assets/characters.yaml?");

/***/ }),

/***/ "./src/assets/world.yaml":
/*!*******************************!*\
  !*** ./src/assets/world.yaml ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({tileMap:{padding:3,size:{height:16,width:16},tileSize:{height:360,width:360},layers:[{type:'ground',tilesets:[1],tiles:[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9],position:{x:0,y:0},size:{height:16,width:16}},{type:'walls',tilesets:[2,3,4],tiles:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,4,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,11,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0,4,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],position:{x:0,y:0},size:{height:16,width:16},spawns:[{tileId:19,calldown:10}],walls:[{tileId:1,hp:50},{tileId:2,hp:50},{tileId:3,hp:50},{tileId:4,hp:50},{tileId:7,hp:50}]}],tilesets:[{tilesetUid:1,tileSize:{height:360,width:360},size:{height:3,width:3},texture:'platforms'},{tilesetUid:2,tileSize:{height:360,width:360},size:{height:3,width:3},texture:'beams'},{tilesetUid:3,tileSize:{height:360,width:360},size:{height:3,width:3},texture:'banners'},{tilesetUid:4,tileSize:{height:360,width:360},size:{height:1,width:1},texture:'spawns'}]}});\n\n//# sourceURL=webpack://tmb-host/./src/assets/world.yaml?");

/***/ }),

/***/ "./src/bullets/index.js":
/*!******************************!*\
  !*** ./src/bullets/index.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst genUuid = Types.UUID.Def().rand\r\n\r\nconst loadEvent = __webpack_require__(/*! ../events/load-data */ \"./src/events/load-data.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/ready-system */ \"./src/events/ready-system.js\")\r\n\r\nconst spwanEvent = __webpack_require__(/*! ../events/objects/spawn-bullet */ \"./src/events/objects/spawn-bullet.js\")\r\nconst createDynamicObject = __webpack_require__(/*! ../events/objects/create-dynamic-object */ \"./src/events/objects/create-dynamic-object.js\")\r\nconst removeDynamicObject = __webpack_require__(/*! ../events/objects/remove-dynamic-object */ \"./src/events/objects/remove-dynamic-object.js\")\r\nconst createHPEvent = __webpack_require__(/*! ../events/objects/create-hp */ \"./src/events/objects/create-hp.js\")\r\nconst deleteHPEvent = __webpack_require__(/*! ../events/objects/remove-hp */ \"./src/events/objects/remove-hp.js\")\r\nconst physicUpdateEvent = __webpack_require__(/*! ../events/objects/update-physic */ \"./src/events/objects/update-physic.js\")\r\nconst updateEvent = __webpack_require__(/*! ../events/objects/update-bullets */ \"./src/events/objects/update-bullets.js\")\r\nconst outLimitObjectEvent = __webpack_require__(/*! ../events/objects/out-limit-world */ \"./src/events/objects/out-limit-world.js\")\r\nconst destroyEvent = __webpack_require__(/*! ../events/objects/destroyed-object */ \"./src/events/objects/destroyed-object.js\")\r\n\r\n\r\nclass BulletsManager extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this._bullets = new Map\r\n\r\n    this.onEvent(loadEvent, payload => this.load(payload))\r\n  }\r\n\r\n  load({ resources: { bullets } }) {\r\n    // console.log(bullets)\r\n    this.onEvent(spwanEvent, payload => this.addNewBullet(payload))\r\n    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))\r\n    this.onEvent(outLimitObjectEvent, payload => this.outLimit(payload))\r\n    this.onEvent(destroyEvent, payload => this.destroy(payload))\r\n\r\n    this.send(readyEvent, { state: { system: \"Bullets\" }})\r\n  }\r\n\r\n  addNewBullet({ state: { parentUuid, direct, position } }) {\r\n    const bullet = new Bullet({ direct, position })\r\n    this._bullets.set(bullet.uuid, bullet)\r\n\r\n    this.send(createHPEvent,  { state:  { \r\n      uuid: bullet.uuid,\r\n      parentUuid: parentUuid,\r\n      hp: 5, \r\n      damage: 10, \r\n      isApplyDamage: true\r\n    }})\r\n    this.send(createDynamicObject, {\r\n      state: bullet.serialize()\r\n    })\r\n  }\r\n\r\n  physicUpdate({ state: positions }) {\r\n    const bullets = []\r\n    \r\n    for (const [uuid, bullet] of this._bullets) {\r\n      bullet.position = positions[uuid]\r\n      bullets.push(bullet.draw())\r\n    }\r\n\r\n    this.send(updateEvent, {\r\n      state: bullets\r\n    })\r\n  }\r\n\r\n  outLimit({ state: uuid }) {\r\n    if(this._bullets.has(uuid))\r\n      this.delete(uuid)\r\n  }\r\n\r\n  destroy({ state: uuid }) {\r\n    if(this._bullets.has(uuid))\r\n      this.delete(uuid)\r\n  }\r\n\r\n  delete(uuid) {\r\n    this._bullets.delete(uuid)\r\n    this.send(deleteHPEvent, { state: uuid })\r\n    this.send(removeDynamicObject, { state: uuid })\r\n  }\r\n}\r\n\r\nclass Bullet {\r\n  constructor({ direct, position }) {\r\n    this.uuid = genUuid()\r\n    this.box = { \r\n      width: 50, \r\n      height: 50\r\n    }\r\n\r\n    this.position = {\r\n      x: position.x - this.box.width / 2,\r\n      y: position.y - this.box.height / 2\r\n    }\r\n    \r\n    this.speed = 1700\r\n    this.velocity = {\r\n      x: direct.x * this.speed,\r\n      y: direct.y * this.speed\r\n    }\r\n    this._groupCollision = \"Bullets\"\r\n  }\r\n\r\n  getCenterPosition() {\r\n    return {\r\n      x: this.position.x + this.box.width / 2,\r\n      y: this.position.y + this.box.height / 2\r\n    }\r\n  }\r\n\r\n  serialize() {\r\n    return {\r\n      uuid: this.uuid,\r\n      shape: \"Box\",\r\n      box: this.box,\r\n      position: {...this.position},\r\n      velocity: this.velocity,\r\n      groupCollision: this._groupCollision\r\n    }\r\n  }\r\n\r\n  draw() {\r\n    return {\r\n      uuid: this.uuid,\r\n      position: this.getCenterPosition(),\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { BulletsManager }\n\n//# sourceURL=webpack://tmb-host/./src/bullets/index.js?");

/***/ }),

/***/ "./src/characters/index.js":
/*!*********************************!*\
  !*** ./src/characters/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst genUuid = Types.UUID.Def().rand\r\n\r\nconst loadEvent = __webpack_require__(/*! ../events/load-data */ \"./src/events/load-data.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/ready-system */ \"./src/events/ready-system.js\")\r\n\r\nconst updatePlayersList = __webpack_require__(/*! ../events/players/update-players-list */ \"./src/events/players/update-players-list.js\")\r\n\r\nconst freeSpawnsEvent = __webpack_require__(/*! ../events/objects/free-spawns */ \"./src/events/objects/free-spawns.js\")\r\nconst spawnEvent = __webpack_require__(/*! ../events/objects/spawn-character */ \"./src/events/objects/spawn-character.js\")\r\nconst spawnedEvent = __webpack_require__(/*! ../events/objects/ready-spawned */ \"./src/events/objects/ready-spawned.js\")\r\n\r\nconst createDynamicObject = __webpack_require__(/*! ../events/objects/create-dynamic-object */ \"./src/events/objects/create-dynamic-object.js\")\r\nconst updateDynamicObject = __webpack_require__(/*! ../events/objects/update-dynamic-object */ \"./src/events/objects/update-dynamic-object.js\")\r\nconst removeDynamicObject = __webpack_require__(/*! ../events/objects/remove-dynamic-object */ \"./src/events/objects/remove-dynamic-object.js\")\r\n\r\nconst createHPEvent = __webpack_require__(/*! ../events/objects/create-hp */ \"./src/events/objects/create-hp.js\")\r\nconst deleteHPEvent = __webpack_require__(/*! ../events/objects/remove-hp */ \"./src/events/objects/remove-hp.js\")\r\nconst killedEvent = __webpack_require__(/*! ../events/objects/destroyed-object */ \"./src/events/objects/destroyed-object.js\")\r\n\r\nconst physicUpdateEvent = __webpack_require__(/*! ../events/objects/update-physic */ \"./src/events/objects/update-physic.js\")\r\nconst updateObjectsTilesCoordinatesEvent = __webpack_require__(/*! ../events/objects/update-objects-tiles-coordintes */ \"./src/events/objects/update-objects-tiles-coordintes.js\")\r\nconst updateEvent = __webpack_require__(/*! ../events/objects/update-characters */ \"./src/events/objects/update-characters.js\")\r\nconst updateKillsEvent = __webpack_require__(/*! ../events/players/update-kills-count */ \"./src/events/players/update-kills-count.js\")\r\n\r\nconst movingEvent = __webpack_require__(/*! ../events/players/moving-direct-change */ \"./src/events/players/moving-direct-change.js\")\r\nconst shotDirectChangeEvent = __webpack_require__(/*! ../events/players/shotting-direct-change */ \"./src/events/players/shotting-direct-change.js\")\r\nconst shotActionEvent = __webpack_require__(/*! ../events/players/shot-action */ \"./src/events/players/shot-action.js\")\r\n\r\nconst spwanBulletEvent = __webpack_require__(/*! ../events/objects/spawn-bullet */ \"./src/events/objects/spawn-bullet.js\")\r\n\r\nclass CharactersManager extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this._characters = new Map\r\n    this._players = new Map\r\n    this.killCount = 0\r\n\r\n    this.onEvent(loadEvent, payload => this.load(payload))\r\n  }\r\n\r\n  load({ resources: { characters } }) {\r\n    this.onEvent(updatePlayersList, payload => this.updatePlayers(payload))\r\n\r\n    this.onEvent(freeSpawnsEvent, payload => this.freeSpawns(payload))\r\n    this.onEvent(spawnedEvent, payload => this.spawnCharacter(payload))\r\n    \r\n\r\n    this.onEvent(physicUpdateEvent, payload => this.physicUpdate(payload))\r\n    this.onEvent(updateObjectsTilesCoordinatesEvent, payload => this.updateTilesCoordinates(payload))\r\n\r\n    this.onEvent(movingEvent, payload => this.moveCharacter(payload))\r\n    this.onEvent(shotDirectChangeEvent, payload => this.setShottingDirect(payload))\r\n    this.onEvent(shotActionEvent, payload => this.shotCharacter(payload))\r\n\r\n    this.onEvent(killedEvent, payload => this.killed(payload))\r\n    \r\n\r\n    this.send(readyEvent, { state: { system: \"Characters\" }})\r\n  }\r\n\r\n  updatePlayers({ state: playersData }) {\r\n\r\n    const newPlayersUuids = []\r\n    playersData.forEach(playerData => {\r\n      newPlayersUuids.push(playerData.uuid)\r\n\r\n      if(!this._players.has(playerData.uuid))\r\n        this.addNewCharacter(playerData.uuid)\r\n    })\r\n\r\n    for (const [playerUuid, _] of this._players) {\r\n      if(!newPlayersUuids.includes(playerUuid))\r\n        this.deleteCharactersByPlayer(playerUuid)\r\n    }\r\n  }\r\n\r\n  addNewCharacter(playerUid) {\r\n    const newCharacter = new Character\r\n    this._characters.set(newCharacter.uuid, newCharacter)\r\n\r\n    if(playerUid) {\r\n      newCharacter.setOwnPlayer(playerUid)\r\n      this._players.set(playerUid, newCharacter.uuid)\r\n    }\r\n\r\n    this.send(createHPEvent,  { state:  { \r\n      uuid: newCharacter.uuid,\r\n      hp: 50, \r\n      damage: 100, \r\n      isApplyDamage: true\r\n    }})\r\n  }\r\n\r\n  deleteCharactersByPlayer(playerUid) {\r\n    const characterUuid = this._players.get(playerUid)\r\n    this._players.delete(playerUid)\r\n    this.deleteCharacter(characterUuid)\r\n  }\r\n\r\n  killed({ state: uuid }) {\r\n    if(!this._characters.has(uuid)) return\r\n\r\n    const character = this._characters.get(uuid)\r\n    character.onDestroy((uuid) => {\r\n      this.deleteCharacter(uuid)\r\n      this.addNewCharacter({ state: character.playerUid })\r\n    })\r\n\r\n    character.killed()\r\n    this.killCount++\r\n  }\r\n\r\n  falling(character) {\r\n    character.onDestroy((uuid) => {\r\n      this.deleteCharacter(uuid)\r\n      this.addNewCharacter({ state: character.playerUid })\r\n    })\r\n\r\n    character.falling()\r\n  }\r\n\r\n  deleteCharacter(uuid) {\r\n    this._characters.delete(uuid)\r\n    this.send(deleteHPEvent, { state: uuid })\r\n    this.send(removeDynamicObject, { state: uuid })\r\n  }\r\n\r\n  freeSpawns({ spawns }) {\r\n    const spawn = spawns[0]\r\n    if(!spawn)\r\n      return\r\n\r\n    const character = this.notSpawnedCharacters()[0]\r\n    if(!character)\r\n      return\r\n\r\n    character.waitSpawn(spawn.uuid)\r\n\r\n    this.send(spawnEvent, { \r\n      spawnUuid: spawn.uuid,\r\n      characterUuid: character.uuid \r\n    })\r\n  }\r\n\r\n  spawnCharacter({ characterUuid, position }) {\r\n    const characterShape = this._characters.get(characterUuid).spawn({ position }).serialize()\r\n\r\n    this.send(createDynamicObject, {\r\n      state: characterShape\r\n    })\r\n  }\r\n\r\n  notSpawnedCharacters() {\r\n    const characters = []\r\n    for (const [_, character] of this._characters) {\r\n      if(character.isCreatedForSpawn())\r\n        characters.push(character)\r\n    }\r\n\r\n    return characters\r\n  }\r\n\r\n  moveCharacter({ playerUuid, state: direct }) {\r\n    if(!this._players.has(playerUuid))\r\n      return\r\n\r\n    const characterUuid = this._players.get(playerUuid)\r\n    const character = this._characters.get(characterUuid)\r\n\r\n    if(!character.isSpawned())\r\n      return\r\n\r\n    character.changeDirection(direct)\r\n\r\n    this.send(updateDynamicObject, {\r\n      state: character.serialize()\r\n    })\r\n  }\r\n\r\n  setShottingDirect({ playerUuid, state: direct }) {\r\n    if(!this._players.has(playerUuid))\r\n      return\r\n\r\n    const characterUuid = this._players.get(playerUuid)\r\n    const character = this._characters.get(characterUuid)\r\n\r\n    if(!character.isSpawned())\r\n      return\r\n\r\n    character.changeShotDirect(direct)\r\n  }\r\n\r\n  shotCharacter({ playerUuid, state: isShotting }) {\r\n    if(!this._players.has(playerUuid))\r\n      return\r\n\r\n    const characterUuid = this._players.get(playerUuid)\r\n    const character = this._characters.get(characterUuid)\r\n\r\n    if(!character.isSpawned())\r\n      return\r\n\r\n    if(isShotting)\r\n      character.setShotting(() => {\r\n        this.send(spwanBulletEvent, {\r\n          state: {\r\n            parentUuid: characterUuid,\r\n            ...character.getSpawnBulletPostitonAndDirect()\r\n          }\r\n        })\r\n      })\r\n    else\r\n      character.delShotting()\r\n  }\r\n\r\n  physicUpdate({ state: positions }) {\r\n    const characters = []\r\n    \r\n    for (const [uuid, character] of this._characters) {\r\n      if(character.isSpawned())\r\n        character.position = positions[uuid]\r\n\r\n      characters.push(character.draw())\r\n    }\r\n\r\n    this.send(updateEvent, {\r\n      state: characters\r\n    })\r\n\r\n    this.send(updateKillsEvent, {\r\n      state: this.killCount\r\n    })\r\n  }\r\n\r\n  updateTilesCoordinates({ state: tilesPosition }) {\r\n    for (const uuid in tilesPosition) {\r\n\r\n      if(!this._characters.has(uuid)) continue\r\n\r\n      const character = this._characters.get(uuid)\r\n\r\n      if(!character.isSpawned()) continue\r\n\r\n      if(!tilesPosition[uuid].isOnGround)\r\n        this.falling(character)\r\n    }\r\n  }\r\n}\r\n\r\nconst HIDDEN = \"Hidden\"\r\nconst STAND = \"Stay\"\r\nconst KILLED = \"Killed\"\r\nconst FALLING = \"Falling\"\r\n\r\nconst CREATED = {\r\n  stateKey: Symbol(),\r\n  animState: HIDDEN\r\n}\r\n\r\nconst WAIT_SPAWN = {\r\n  stateKey: Symbol(),\r\n  animState: HIDDEN\r\n}\r\n\r\nconst SPAWNED = {\r\n  stateKey: Symbol(),\r\n  animState: STAND\r\n}\r\n\r\nconst DESTROYED = { \r\n  stateKey: Symbol(),\r\n  animState: KILLED\r\n}\r\n\r\nconst FALLEN = { \r\n  stateKey: Symbol(),\r\n  animState: FALLING\r\n}\r\n\r\nclass Character {\r\n  constructor() {\r\n    this.uuid = genUuid()\r\n    this.playerUid = null\r\n    this.speed = 0\r\n    this.position = { x: 0, y: 0 }\r\n    this.velocity = { x: 0, y: 0 }\r\n    this.shotDirect = { x: 1, y: 0 }\r\n    this.isShotting = false\r\n    this.box = {\r\n      width: 115,\r\n      height: 340\r\n    }\r\n    this.pivot = {\r\n      x: 50,\r\n      y: 340\r\n    }\r\n    this.setState(CREATED)\r\n    this.spawnUuid = null\r\n\r\n    this._groupCollision = \"Characters\"\r\n  }\r\n\r\n  setOwnPlayer(playerUid) {\r\n    this.playerUid = playerUid\r\n  }\r\n\r\n  onDestroy(callback) {\r\n    this.destroyCallback = callback\r\n  }\r\n\r\n  setState(state) {\r\n    if(this._state == state)\r\n      return\r\n\r\n    if(state === WAIT_SPAWN && this._state !== CREATED)\r\n      return\r\n\r\n    if(state === SPAWNED && this._state !== WAIT_SPAWN)\r\n      return\r\n\r\n    if(state === DESTROYED && this._state !== SPAWNED)\r\n      return\r\n      \r\n    this._state = state\r\n    return true\r\n  }\r\n\r\n  setShotting(cb) {\r\n    if(this.isShotting) return\r\n\r\n    this.isShotting = true\r\n    this.shottingTimer = setInterval(cb, 500)\r\n    cb() //first shot\r\n  }\r\n\r\n  delShotting() {\r\n    if(!this.isShotting) return\r\n\r\n    this.isShotting = false\r\n    clearInterval(this.shottingTimer)\r\n  }\r\n  \r\n\r\n  isCreatedForSpawn() {\r\n    return this._state.stateKey === CREATED.stateKey\r\n  }\r\n\r\n  isWaitSpawn() {\r\n    return this._state.stateKey === WAIT_SPAWN.stateKey\r\n  }\r\n\r\n  isSpawned() {\r\n    return this._state.stateKey === SPAWNED.stateKey\r\n  }\r\n\r\n  waitSpawn(spawnUuid) {\r\n    if(!this.setState(WAIT_SPAWN))\r\n      return\r\n\r\n    this.spawnUuid = spawnUuid\r\n  }\r\n\r\n  spawn({ position: { x, y } }) {\r\n    if(!this.setState(SPAWNED))\r\n      return\r\n    \r\n    this.speed = 1400\r\n    this.position = { x, y }\r\n\r\n    return this\r\n  }\r\n\r\n  killed() {\r\n    if(!this.setState(DESTROYED))\r\n      return\r\n\r\n    if(this.destroyCallback) \r\n      setTimeout(() => {\r\n        this.destroyCallback(this.uuid)\r\n      }, 3000)\r\n\r\n    this.delShotting()\r\n  }\r\n\r\n  falling() {\r\n    if(!this.setState(FALLEN))\r\n      return\r\n\r\n    if(this.destroyCallback) \r\n      setTimeout(() => {\r\n        this.destroyCallback(this.uuid)\r\n      }, 3000)\r\n\r\n    this.delShotting()\r\n  }\r\n\r\n  getCenterPosition() {\r\n    return {\r\n      x: this.position.x + this.box.width / 2,\r\n      y: this.position.y + this.box.height / 2\r\n    }\r\n  }\r\n\r\n  getSpawnBulletPostitonAndDirect() {\r\n    const characterCenter = this.getCenterPosition()\r\n    \r\n    const turn = (point, direct) => ({\r\n      x: point.x * direct.x - point.y * direct.y * Math.sign(direct.x),\r\n      y: point.x * direct.y + point.y * direct.x * Math.sign(direct.x)\r\n    })\r\n\r\n    const bulletShift = turn({\r\n      x: 100,\r\n      y: -25\r\n    }, this.shotDirect)\r\n\r\n    const gunShift = {\r\n      x: -25,\r\n      y: 25\r\n    }\r\n\r\n    return {\r\n      direct: this.shotDirect,\r\n      position: {\r\n        x: characterCenter.x + bulletShift.x + gunShift.x * Math.sign(this.shotDirect.x),\r\n        y: characterCenter.y + bulletShift.y + gunShift.y\r\n      }\r\n    }\r\n  }\r\n\r\n  changeShotDirect(direct) {\r\n    if(!this.isSpawned())\r\n      return\r\n\r\n    this.shotDirect = direct\r\n  }\r\n\r\n  vectorLength({x, y}) {\r\n    return Math.sqrt(x*x + y*y)\r\n  }\r\n\r\n  vectorNormalize({x, y}) {\r\n    if(x === 0 || y === 0)\r\n      return {\r\n        x: Math.sign(x), \r\n        y: Math.sign(y)\r\n      }\r\n\r\n    const length = this.vectorLength({x, y})\r\n    return {\r\n      x: x / length,\r\n      y: y / length,\r\n    }\r\n  }\r\n\r\n  changeDirection(direct) {\r\n    if(!this.isSpawned())\r\n      return\r\n\r\n    direct = this.vectorNormalize(direct)\r\n\r\n    this.velocity = { \r\n      x: direct.x * this.speed, \r\n      y: direct.y * this.speed\r\n    }\r\n  }\r\n\r\n  serialize() {\r\n    const { width, height } = this.box\r\n    return {\r\n      uuid: this.uuid,\r\n      shape: \"Box\",\r\n      box: { width, height },\r\n      position: { ...this.position},\r\n      pivot: { ...this.pivot},\r\n      velocity: {\r\n        x: this.velocity.x,\r\n        y: this.velocity.y\r\n      },\r\n      groupCollision: this._groupCollision\r\n    }\r\n  }\r\n\r\n  draw() {\r\n    return {\r\n      uuid: this.uuid,\r\n      playerUuid: this.playerUid,\r\n      state: this._state.animState,\r\n      position: this.getCenterPosition(),\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { CharactersManager }\n\n//# sourceURL=webpack://tmb-host/./src/characters/index.js?");

/***/ }),

/***/ "./src/events/load-data.js":
/*!*********************************!*\
  !*** ./src/events/load-data.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"Data\",\r\n  action: \"Load\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/load-data.js?");

/***/ }),

/***/ "./src/events/load-resources.js":
/*!**************************************!*\
  !*** ./src/events/load-resources.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"Resources\",\r\n  action: \"Load\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/load-resources.js?");

/***/ }),

/***/ "./src/events/load-world.js":
/*!**********************************!*\
  !*** ./src/events/load-world.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"World\",\r\n  action: \"Load\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/load-world.js?");

/***/ }),

/***/ "./src/events/objects/add-spawn.js":
/*!*****************************************!*\
  !*** ./src/events/objects/add-spawn.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"Spawn\",\r\n  action: \"Add\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/add-spawn.js?");

/***/ }),

/***/ "./src/events/objects/create-dynamic-object.js":
/*!*****************************************************!*\
  !*** ./src/events/objects/create-dynamic-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst CHARACTERS = Types.Const.Def(\"Characters\")\r\nconst BULLETS = Types.Const.Def(\"Bullets\")\r\n\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Object\",\r\n  action: \"Create\",\r\n  state: Types.Object.Def({\r\n    uuid: Types.UUID.Def(),\r\n    shape: \"Box\",\r\n    groupCollision: Types.Any.Def([CHARACTERS, BULLETS])\r\n  }, true)\r\n})\r\n\r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/create-dynamic-object.js?");

/***/ }),

/***/ "./src/events/objects/create-hp.js":
/*!*****************************************!*\
  !*** ./src/events/objects/create-hp.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"HPDamage\",\r\n  entity: \"HP\",\r\n  action: \"Create\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/create-hp.js?");

/***/ }),

/***/ "./src/events/objects/create-walls-object.js":
/*!***************************************************!*\
  !*** ./src/events/objects/create-walls-object.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Walls\",\r\n  action: \"Create\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/create-walls-object.js?");

/***/ }),

/***/ "./src/events/objects/destroyed-object.js":
/*!************************************************!*\
  !*** ./src/events/objects/destroyed-object.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"HPDamage\",\r\n  entity: \"HP\",\r\n  action: \"Destroyed\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/destroyed-object.js?");

/***/ }),

/***/ "./src/events/objects/free-spawns.js":
/*!*******************************************!*\
  !*** ./src/events/objects/free-spawns.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"FreeSpawns\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/free-spawns.js?");

/***/ }),

/***/ "./src/events/objects/out-limit-world.js":
/*!***********************************************!*\
  !*** ./src/events/objects/out-limit-world.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Object\",\r\n  action: \"OutLimit\",\r\n  state: Types.UUID.Def()\r\n})\r\n\r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/out-limit-world.js?");

/***/ }),

/***/ "./src/events/objects/overlap-objects.js":
/*!***********************************************!*\
  !*** ./src/events/objects/overlap-objects.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Objects\",\r\n  action: \"Overlap\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/overlap-objects.js?");

/***/ }),

/***/ "./src/events/objects/ready-spawned.js":
/*!*********************************************!*\
  !*** ./src/events/objects/ready-spawned.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Characters\",\r\n  entity: \"Character\",\r\n  state: \"Spawned\",\r\n  characterUuid: Types.UUID.Def()\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/ready-spawned.js?");

/***/ }),

/***/ "./src/events/objects/remove-dynamic-object.js":
/*!*****************************************************!*\
  !*** ./src/events/objects/remove-dynamic-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst CHARACTERS = Types.Const.Def(\"Characters\")\r\nconst BULLETS = Types.Const.Def(\"Bullets\")\r\n\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Object\",\r\n  action: \"Remove\",\r\n  state: Types.UUID.Def()\r\n})\r\n\r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/remove-dynamic-object.js?");

/***/ }),

/***/ "./src/events/objects/remove-hp.js":
/*!*****************************************!*\
  !*** ./src/events/objects/remove-hp.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"HPDamage\",\r\n  entity: \"HP\",\r\n  action: \"Remove\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/remove-hp.js?");

/***/ }),

/***/ "./src/events/objects/remove-walls-object.js":
/*!***************************************************!*\
  !*** ./src/events/objects/remove-walls-object.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Walls\",\r\n  action: \"Remove\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/remove-walls-object.js?");

/***/ }),

/***/ "./src/events/objects/spawn-bullet.js":
/*!********************************************!*\
  !*** ./src/events/objects/spawn-bullet.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Bullets\",\r\n  entity: \"Bullet\",\r\n  action: \"Spawn\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/spawn-bullet.js?");

/***/ }),

/***/ "./src/events/objects/spawn-character.js":
/*!***********************************************!*\
  !*** ./src/events/objects/spawn-character.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Characters\",\r\n  entity: \"Character\",\r\n  action: \"Spawn\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/spawn-character.js?");

/***/ }),

/***/ "./src/events/objects/update-bullets.js":
/*!**********************************************!*\
  !*** ./src/events/objects/update-bullets.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"Bullets\",\r\n  action: \"Update\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-bullets.js?");

/***/ }),

/***/ "./src/events/objects/update-characters.js":
/*!*************************************************!*\
  !*** ./src/events/objects/update-characters.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"Characters\",\r\n  action: \"Update\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-characters.js?");

/***/ }),

/***/ "./src/events/objects/update-dynamic-object.js":
/*!*****************************************************!*\
  !*** ./src/events/objects/update-dynamic-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Object\",\r\n  action: \"Update\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-dynamic-object.js?");

/***/ }),

/***/ "./src/events/objects/update-objects-tiles-coordintes.js":
/*!***************************************************************!*\
  !*** ./src/events/objects/update-objects-tiles-coordintes.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"ObjectsTilesCoordinates\",\r\n  action: \"Update\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-objects-tiles-coordintes.js?");

/***/ }),

/***/ "./src/events/objects/update-physic.js":
/*!*********************************************!*\
  !*** ./src/events/objects/update-physic.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Physic\",\r\n  entity: \"Objects\",\r\n  action: \"Update\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-physic.js?");

/***/ }),

/***/ "./src/events/objects/update-platforms-count.js":
/*!******************************************************!*\
  !*** ./src/events/objects/update-platforms-count.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"TileMap\",\r\n  entity: \"PlatformsCount\",\r\n  state: Types.Index.Def(256*256)\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-platforms-count.js?");

/***/ }),

/***/ "./src/events/objects/update-tiles.js":
/*!********************************************!*\
  !*** ./src/events/objects/update-tiles.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"Tiles\",\r\n  action: \"Update\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-tiles.js?");

/***/ }),

/***/ "./src/events/objects/update-walls-count.js":
/*!**************************************************!*\
  !*** ./src/events/objects/update-walls-count.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"TileMap\",\r\n  entity: \"WallsCount\",\r\n  state: Types.Index.Def(256*256)\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/objects/update-walls-count.js?");

/***/ }),

/***/ "./src/events/pause-world.js":
/*!***********************************!*\
  !*** ./src/events/pause-world.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"World\",\r\n  state: \"Stop\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/pause-world.js?");

/***/ }),

/***/ "./src/events/players/connected-player.js":
/*!************************************************!*\
  !*** ./src/events/players/connected-player.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"PlayersManagment\",\r\n  entity: \"Player\",\r\n  action: \"Connect\",\r\n  state: Types.UUID.Def()\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/connected-player.js?");

/***/ }),

/***/ "./src/events/players/disconnected-player.js":
/*!***************************************************!*\
  !*** ./src/events/players/disconnected-player.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"PlayersManagment\",\r\n  entity: \"Player\",\r\n  action: \"Disconnect\",\r\n  state: Types.UUID.Def()\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/disconnected-player.js?");

/***/ }),

/***/ "./src/events/players/moving-direct-change.js":
/*!****************************************************!*\
  !*** ./src/events/players/moving-direct-change.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Actions\",\r\n  entity: \"MovingDirect\",\r\n  playerUuid: Types.UUID.Def(),\r\n  state: {\r\n    x: Types.Number.Def(1, -1, 3),\r\n    y: Types.Number.Def(1, -1, 3)\r\n  }\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/moving-direct-change.js?");

/***/ }),

/***/ "./src/events/players/ping-players.js":
/*!********************************************!*\
  !*** ./src/events/players/ping-players.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"PlayersManagment\",\r\n  entity: \"PingPong\",\r\n  state: \"Ping\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/ping-players.js?");

/***/ }),

/***/ "./src/events/players/pong-players.js":
/*!********************************************!*\
  !*** ./src/events/players/pong-players.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"PlayersManagment\",\r\n  entity: \"PingPong\",\r\n  state: \"Pong\",\r\n  playerUuid: Types.UUID.Def()\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/pong-players.js?");

/***/ }),

/***/ "./src/events/players/shot-action.js":
/*!*******************************************!*\
  !*** ./src/events/players/shot-action.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Actions\",\r\n  entity: \"IsShot\",\r\n  playerUuid: Types.UUID.Def(),\r\n  state: Types.Bool.Def()\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/shot-action.js?");

/***/ }),

/***/ "./src/events/players/shotting-direct-change.js":
/*!******************************************************!*\
  !*** ./src/events/players/shotting-direct-change.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Actions\",\r\n  entity: \"ShottingDirect\",\r\n  playerUuid: Types.UUID.Def(),\r\n  state: {\r\n    x: Types.Number.Def(1, -1, 3),\r\n    y: Types.Number.Def(1, -1, 3)\r\n  }\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/shotting-direct-change.js?");

/***/ }),

/***/ "./src/events/players/update-kills-count.js":
/*!**************************************************!*\
  !*** ./src/events/players/update-kills-count.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Characters\",\r\n  entity: \"KillsCount\",\r\n  state: Types.Index.Def(256*256)\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/update-kills-count.js?");

/***/ }),

/***/ "./src/events/players/update-players-count.js":
/*!****************************************************!*\
  !*** ./src/events/players/update-players-count.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"PlayersManagment\",\r\n  entity: \"PlayersCount\",\r\n  state: Types.Index.Def(50)\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/update-players-count.js?");

/***/ }),

/***/ "./src/events/players/update-players-list.js":
/*!***************************************************!*\
  !*** ./src/events/players/update-players-list.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst { PlayersListType } = __webpack_require__(/*! ../../types/player */ \"./src/types/player.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"PlayersManagment\",\r\n  entity: \"Players\",\r\n  state: PlayersListType\r\n})\r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/players/update-players-list.js?");

/***/ }),

/***/ "./src/events/ready-players-manager.js":
/*!*********************************************!*\
  !*** ./src/events/ready-players-manager.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"PlayersManager\",\r\n  state: \"Ready\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/ready-players-manager.js?");

/***/ }),

/***/ "./src/events/ready-system.js":
/*!************************************!*\
  !*** ./src/events/ready-system.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"World\",\r\n  entity: \"System\",\r\n  action: \"Ready\",\r\n  state: {\r\n    system: Types.Any.Def([\r\n      Types.Const.Def(\"Physic\"),\r\n      Types.Const.Def(\"Tiles\"),\r\n      Types.Const.Def(\"Characters\"),\r\n      Types.Const.Def(\"Bullets\"),\r\n    ])\r\n  }\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/ready-system.js?");

/***/ }),

/***/ "./src/events/ready-world.js":
/*!***********************************!*\
  !*** ./src/events/ready-world.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"World\",\r\n  state: \"Ready\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/ready-world.js?");

/***/ }),

/***/ "./src/events/run-world.js":
/*!*********************************!*\
  !*** ./src/events/run-world.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"World\",\r\n  state: \"Running\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/run-world.js?");

/***/ }),

/***/ "./src/events/start-session.js":
/*!*************************************!*\
  !*** ./src/events/start-session.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { EventFactory, Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst type = Types.Object.Def({\r\n  system: \"Game\",\r\n  entity: \"Session\",\r\n  state: \"Start\"\r\n}, true) \r\nmodule.exports = EventFactory(type)\n\n//# sourceURL=webpack://tmb-host/./src/events/start-session.js?");

/***/ }),

/***/ "./src/game-session/index.js":
/*!***********************************!*\
  !*** ./src/game-session/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member, events: { readyMembers } } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst startSessionEvent = __webpack_require__(/*! ../events/start-session */ \"./src/events/start-session.js\")\r\nconst readyPlayersManagerEvent = __webpack_require__(/*! ../events/ready-players-manager */ \"./src/events/ready-players-manager.js\")\r\nconst loadWorldEvent = __webpack_require__(/*! ../events/load-world */ \"./src/events/load-world.js\")\r\nconst readyWorldEvent = __webpack_require__(/*! ../events/ready-world */ \"./src/events/ready-world.js\")\r\nconst runWorldEvent = __webpack_require__(/*! ../events/run-world */ \"./src/events/run-world.js\")\r\nconst stopWorldEvent = __webpack_require__(/*! ../events/pause-world */ \"./src/events/pause-world.js\")\r\nconst updatePlayersCountEvent = __webpack_require__(/*! ../events/players/update-players-count */ \"./src/events/players/update-players-count.js\")\r\n\r\nconst START = Symbol(\"Start\")\r\nconst LOADING = Symbol(\"Loading\")\r\nconst PAUSE = Symbol(\"Pause\")\r\nconst RUNNING = Symbol(\"Running\")\r\n\r\nclass GameSession extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this.onEvent(readyMembers, () => this.startSession())\r\n    this._state = START\r\n  }\r\n\r\n  startSession() {\r\n    if(this._state == START)\r\n      this._state = LOADING\r\n    else\r\n      return\r\n\r\n    this.onEvent(readyPlayersManagerEvent, () => this.loadSession())\r\n    this.send(startSessionEvent)\r\n  }\r\n\r\n  loadSession() {\r\n    this.onEvent(readyWorldEvent, () => this.finishLoadingWorld())\r\n    this.send(loadWorldEvent)\r\n  }\r\n\r\n  finishLoadingWorld(){\r\n    if(this._state == LOADING)\r\n      this._state = PAUSE\r\n    else\r\n      return\r\n\r\n    this.onEvent(updatePlayersCountEvent, payload => this.isCountPlayers(payload))\r\n  }\r\n\r\n  isCountPlayers({ state }) {\r\n    if(state > 0)\r\n      this.run()\r\n    else\r\n      this.makePause()\r\n  }\r\n\r\n  run() {\r\n    if(this._state == PAUSE) {\r\n      this._state = RUNNING\r\n      this.send(runWorldEvent)\r\n    }\r\n  }\r\n\r\n  makePause() {\r\n    if(this._state == RUNNING) {\r\n      this._state = PAUSE\r\n      this.send(stopWorldEvent)\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { GameSession }\n\n//# sourceURL=webpack://tmb-host/./src/game-session/index.js?");

/***/ }),

/***/ "./src/hp-damage/index.js":
/*!********************************!*\
  !*** ./src/hp-damage/index.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst createEvent = __webpack_require__(/*! ../events/objects/create-hp */ \"./src/events/objects/create-hp.js\")\r\nconst deleteEvent = __webpack_require__(/*! ../events/objects/remove-hp */ \"./src/events/objects/remove-hp.js\")\r\nconst destroyEvent = __webpack_require__(/*! ../events/objects/destroyed-object */ \"./src/events/objects/destroyed-object.js\")\r\nconst overlapEvent = __webpack_require__(/*! ../events/objects/overlap-objects */ \"./src/events/objects/overlap-objects.js\")\r\n\r\nclass HPDamage extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this.objects = new Map\r\n\r\n    this.onEvent(createEvent, payload => this.create(payload))\r\n    this.onEvent(deleteEvent, payload => this.delete(payload))\r\n    this.onEvent(overlapEvent, payload => this.applyDamage(payload))\r\n  }\r\n\r\n  create({ state:  { uuid, parentUuid, hp, damage, isApplyDamage }  }) {\r\n    const newObject = new HP({\r\n      parentUuid,\r\n      hp,\r\n      damage,\r\n      isApplyDamage\r\n    })\r\n    this.objects.set(uuid, newObject)\r\n  }\r\n\r\n  delete({ state:  uuid  }) {\r\n    this.objects.delete(uuid)\r\n  }\r\n\r\n  applyDamage({ state: uuids }) {\r\n    if(!this.objects.has(uuids[0]) || !this.objects.has(uuids[1]))\r\n      return\r\n\r\n    const firstObj = this.objects.get(uuids[0])\r\n    const secondObj = this.objects.get(uuids[1])\r\n\r\n    if(firstObj.isDestroyed || secondObj.isDestroyed)\r\n      return\r\n\r\n    if(firstObj.parentUuid === uuids[1] || secondObj.parentUuid === uuids[0])\r\n      return\r\n\r\n    firstObj.applyDamage(secondObj.damage)\r\n    secondObj.applyDamage(firstObj.damage)\r\n\r\n    if(firstObj.isDestroyed)\r\n      this.send(destroyEvent, { state: uuids[0] })\r\n\r\n    if(secondObj.isDestroyed)\r\n      this.send(destroyEvent, { state: uuids[1] })\r\n  }\r\n}\r\n\r\nclass HP {\r\n  constructor({ parentUuid, hp = 1, damage, isApplyDamage = false }) {\r\n    this.parentUuid = parentUuid\r\n    this.hp = hp\r\n    this.damage = damage || hp\r\n    this.isApplyDamage = isApplyDamage\r\n\r\n    this.isDestroyed = false \r\n  }\r\n\r\n  applyDamage(damage) {\r\n    if(!this.isApplyDamage)\r\n      return\r\n\r\n    this.hp -= damage\r\n\r\n    if(this.hp <= 0)\r\n      this.destroy()\r\n  }\r\n\r\n  destroy() {\r\n    this.hp = 0\r\n    this.isDestroyed = true\r\n  }\r\n}\r\n\r\nmodule.exports = { HPDamage }\n\n//# sourceURL=webpack://tmb-host/./src/hp-damage/index.js?");

/***/ }),

/***/ "./src/logging.js":
/*!************************!*\
  !*** ./src/logging.js ***!
  \************************/
/***/ ((module) => {

eval("function Logging() {\r\n  return function (payload) {\r\n    switch(payload.message.system) {\r\n      case \"Timing\":\r\n        break\r\n      case \"Cooperation\":\r\n        break\r\n      default:\r\n        null\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { Logging }\n\n//# sourceURL=webpack://tmb-host/./src/logging.js?");

/***/ }),

/***/ "./src/physic/index.js":
/*!*****************************!*\
  !*** ./src/physic/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member, events: { time } } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst { System } = __webpack_require__(/*! detect-collisions */ \"./node_modules/detect-collisions/dist/index.js\");\r\n\r\nconst loadEvent = __webpack_require__(/*! ../events/load-data */ \"./src/events/load-data.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/ready-system */ \"./src/events/ready-system.js\")\r\nconst runEvent = __webpack_require__(/*! ../events/run-world */ \"./src/events/run-world.js\")\r\nconst stopEvent = __webpack_require__(/*! ../events/pause-world */ \"./src/events/pause-world.js\")\r\n\r\nconst createDynamicObject = __webpack_require__(/*! ../events/objects/create-dynamic-object */ \"./src/events/objects/create-dynamic-object.js\")\r\nconst updateDynamicObject = __webpack_require__(/*! ../events/objects/update-dynamic-object */ \"./src/events/objects/update-dynamic-object.js\")\r\nconst removeDynamicObject = __webpack_require__(/*! ../events/objects/remove-dynamic-object */ \"./src/events/objects/remove-dynamic-object.js\")\r\nconst createWallsEvent = __webpack_require__(/*! ../events/objects/create-walls-object */ \"./src/events/objects/create-walls-object.js\")\r\nconst removeWallsEvent = __webpack_require__(/*! ../events/objects/remove-walls-object */ \"./src/events/objects/remove-walls-object.js\")\r\nconst updateEvent = __webpack_require__(/*! ../events/objects/update-physic */ \"./src/events/objects/update-physic.js\")\r\nconst overlapEvent = __webpack_require__(/*! ../events/objects/overlap-objects */ \"./src/events/objects/overlap-objects.js\")\r\nconst outLimitObjectEvent = __webpack_require__(/*! ../events/objects/out-limit-world */ \"./src/events/objects/out-limit-world.js\")\r\n\r\nconst LOAD = Symbol(\"Loading\")\r\nconst PAUSE = Symbol(\"Pause\")\r\nconst RUNNING = Symbol(\"Running\")\r\nclass Physic extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this._state = LOAD\r\n    this.timer = new Timer\r\n\r\n    this._dynamicObjects = new Map\r\n    this._staticObjects = new Map\r\n\r\n    this.groupsCollisions = new Collision\r\n    this.collisionSystem = new System\r\n\r\n    this.limit = 360*36\r\n    \r\n    this.onEvent(loadEvent, payload => this.load(payload))\r\n  }\r\n\r\n  load({ resources: { physic } }) {\r\n\r\n    this.limitsRect = physic.limitsRect\r\n\r\n    this.onEvent(runEvent, () => this.run())\r\n    this.onEvent(stopEvent, () => this.stop())\r\n    this.onEvent(createDynamicObject, payload => this.createDynamic(payload))\r\n    this.onEvent(updateDynamicObject, payload => this.updateDynamic(payload))\r\n    this.onEvent(removeDynamicObject, payload => this.removeDynamic(payload))\r\n    this.onEvent(createWallsEvent, payload => this.createWall(payload))\r\n    this.onEvent(removeWallsEvent, payload => this.deleteWall(payload))\r\n    this.onEvent(time, () => this.step())\r\n\r\n    this.stop()\r\n    this.send(readyEvent, { state: { system: \"Physic\" }})\r\n  }\r\n\r\n  run() {\r\n    this._state = RUNNING\r\n    this.timer.run()\r\n  }\r\n\r\n  stop() {\r\n    this._state = PAUSE\r\n  }\r\n\r\n  createDynamic({ state: newObject }) {\r\n    if(newObject.shape === \"Box\")\r\n      this.createDynamicBox(newObject)\r\n    \r\n  }\r\n\r\n  createDynamicBox({ uuid, position, pivot, box: { width, height }, velocity, groupCollision }) {\r\n    const options = { isStatic: false }\r\n    const box = this.collisionSystem.createBox(position, width, height, options)\r\n    box.uuid = uuid\r\n    box.velocity = velocity\r\n    box.groupCollision = groupCollision\r\n    box.pivot = pivot || { x: width / 2, y: height / 2 }\r\n    \r\n    this._dynamicObjects.set(uuid, box)\r\n  }\r\n\r\n  updateDynamic({ state: object }) {\r\n    const physicObject = this._dynamicObjects.get(object.uuid)\r\n    physicObject.velocity = {\r\n      x: object.velocity.x,\r\n      y: object.velocity.y\r\n    }\r\n    physicObject.isOut = false\r\n  }\r\n\r\n  removeDynamic({ state: uuid }) {\r\n    if(this._dynamicObjects.has(uuid)) {\r\n      this.collisionSystem.remove(this._dynamicObjects.get(uuid))\r\n      this._dynamicObjects.delete(uuid)\r\n    }\r\n  }\r\n\r\n  createWall({ state: {\r\n    uuid,\r\n    position: { row, column },\r\n    tileSize,\r\n    half\r\n  }}) {\r\n    const position = {\r\n      x: column * tileSize.width,\r\n      y: row * tileSize.height,\r\n    }\r\n    if(half === \"right\")\r\n      position.x += tileSize.width * 0.5\r\n\r\n    const width = half ? tileSize.width * 0.5 : tileSize.width\r\n    const height = tileSize.height\r\n    const options = { isStatic: true }\r\n\r\n    const wall = this.collisionSystem.createBox(position, width, height, options)\r\n    wall.uuid = uuid\r\n    wall.groupCollision = WALLS\r\n\r\n    this._staticObjects.set(uuid, wall)\r\n  }\r\n\r\n  deleteWall({ state: uuid }) {\r\n    if(this._staticObjects.has(uuid)) {\r\n      this.collisionSystem.remove(this._staticObjects.get(uuid))\r\n      this._staticObjects.delete(uuid)\r\n    }\r\n  }\r\n\r\n  step() {\r\n    if(this._state != RUNNING) return\r\n    this.timer.step()\r\n\r\n    this.updatePositions()\r\n    this.checkCollisions()\r\n    this.sendUpdated()\r\n  }\r\n\r\n  checkCollisions() {\r\n    this.collisionSystem.checkAll(({ a, b, overlapV }) => {\r\n      if(this.groupsCollisions.isRebound(a.groupCollision, b.groupCollision))\r\n        this.resolveCollision({ a, b, overlapV })\r\n\r\n      if(this.groupsCollisions.isTrigger(a.groupCollision, b.groupCollision))\r\n        this.send(overlapEvent, { state: [a.uuid, b.uuid] })\r\n    })\r\n  }\r\n\r\n  resolveCollision({ a, b, overlapV }) {\r\n    if(!a.isStatic)\r\n      a.setPosition(\r\n        a.x - overlapV.x,\r\n        a.y - overlapV.y\r\n      )\r\n  }\r\n\r\n  sendUpdated() {\r\n    const objectsPositions = {}\r\n\r\n    for (const [uuid, object] of this._dynamicObjects) {\r\n      objectsPositions[uuid] = {\r\n        x: object.x,\r\n        y: object.y,\r\n        pivot: { ...object.pivot },\r\n        vx: object.velocity.x,\r\n        vy: object.velocity.y\r\n      }\r\n    }\r\n\r\n    this.send(updateEvent, { state: objectsPositions })\r\n  }\r\n\r\n  updatePositions() {\r\n    for (const [uuid, object] of this._dynamicObjects) {\r\n      if(object.isOut) continue\r\n\r\n      this.updatePosition(object)\r\n      const { x , y } = object\r\n\r\n      if(this.checkLimitOfPosition({ x , y })) {\r\n        object.isOut = true\r\n        this.send(outLimitObjectEvent, { state: uuid })\r\n      }\r\n    }\r\n  }\r\n\r\n  checkLimitOfPosition({ x , y }) {\r\n    if(x < this.limitsRect.x || x > this.limitsRect.width)\r\n      return true\r\n\r\n    if(y < this.limitsRect.y || y > this.limitsRect.height)\r\n      return true\r\n\r\n    return false\r\n  }\r\n\r\n  updatePosition(object) {\r\n    object.setPosition(\r\n      object.x + object.velocity.x * this.timer.delta,\r\n      object.y + object.velocity.y * this.timer.delta\r\n    )\r\n  }\r\n}\r\n\r\nconst NONE = \"None\"\r\nconst TRRIGER = \"Overlap\"\r\nconst REBOUND = \"Rebound\"\r\n\r\nconst WALLS = \"Walls\"\r\nconst CHARACTERS = \"Characters\"\r\nconst BULLETS = \"Bullets\"\r\n\r\nclass Collision {\r\n  constructor() {\r\n    const walls = new Map([\r\n      [WALLS, TRRIGER],\r\n      [CHARACTERS, REBOUND],\r\n      [BULLETS, TRRIGER]\r\n    ])\r\n    const characters = new Map([\r\n      [WALLS, REBOUND],\r\n      [CHARACTERS, NONE],\r\n      [BULLETS, TRRIGER]\r\n    ])\r\n    const bullets = new Map([\r\n      [WALLS, TRRIGER],\r\n      [CHARACTERS, TRRIGER],\r\n      [BULLETS, NONE]\r\n    ]) \r\n\r\n    this._collisionsTypes = new Map([\r\n      [WALLS, walls],\r\n      [CHARACTERS, characters],\r\n      [BULLETS, bullets]\r\n    ]) \r\n  }\r\n\r\n  isTrigger(typeA, typeB) {\r\n    return this._collisionsTypes.get(typeA).get(typeB) === TRRIGER\r\n  }\r\n\r\n  isRebound(typeA, typeB) {\r\n    return this._collisionsTypes.get(typeA).get(typeB) === REBOUND\r\n  }\r\n}\r\n\r\nclass Timer {\r\n  constructor() {\r\n    this._time = null\r\n    this._delta = 0\r\n  }\r\n  \r\n  run() {\r\n    this._time = Date.now()\r\n    this._delta = 0\r\n  }\r\n\r\n  step () {\r\n    const newTime = Date.now()\r\n    this._delta = newTime - this._time\r\n    this._time = newTime\r\n  }\r\n\r\n  get delta () {\r\n    return this._delta / 1000\r\n  }\r\n}\r\n\r\nmodule.exports = { Physic }\n\n//# sourceURL=webpack://tmb-host/./src/physic/index.js?");

/***/ }),

/***/ "./src/players-manager/index.js":
/*!**************************************!*\
  !*** ./src/players-manager/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member, events: { time } } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst startSessionEvent = __webpack_require__(/*! ../events/start-session */ \"./src/events/start-session.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/ready-players-manager */ \"./src/events/ready-players-manager.js\")\r\nconst connectedEvent = __webpack_require__(/*! ../events/players/connected-player */ \"./src/events/players/connected-player.js\")\r\nconst disconnectedEvent = __webpack_require__(/*! ../events/players/disconnected-player */ \"./src/events/players/disconnected-player.js\")\r\nconst updateCountEvent = __webpack_require__(/*! ../events/players/update-players-count */ \"./src/events/players/update-players-count.js\")\r\nconst update = __webpack_require__(/*! ../events/players/update-players-list */ \"./src/events/players/update-players-list.js\")\r\nconst pingEvent = __webpack_require__(/*! ../events/players/ping-players */ \"./src/events/players/ping-players.js\")\r\nconst pongEvent = __webpack_require__(/*! ../events/players/pong-players */ \"./src/events/players/pong-players.js\")\r\n\r\nconst MSTIMELIMIT = 2000\r\nclass PlayersManager extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this._players = new Map\r\n    this.timeout = 0\r\n    this.timePing = 0\r\n\r\n    this.onEvent(startSessionEvent, () => this.start())\r\n  }\r\n\r\n  start() {\r\n    this.onEvent(time, payload => this.tick(payload))\r\n    this.onEvent(pongEvent, payload => this.pong(payload))\r\n    this.send(readyEvent)\r\n  }\r\n\r\n  pong({  playerUuid }) {\r\n    if(!this._players.has(playerUuid))\r\n      this.connectPlayer(playerUuid)\r\n\r\n    this._players.get(playerUuid).pong = true\r\n  }\r\n\r\n  connectPlayer(playerUuid) {\r\n    this._players.set(playerUuid, {\r\n      pong: false,\r\n      deltaTime: 0\r\n    })\r\n\r\n    this.send(connectedEvent, { state: playerUuid })\r\n    this.send(updateCountEvent, { state: this._players.size })\r\n    this.send(update, { state: this.getPlayers() })\r\n  }\r\n\r\n  tick({ state: { mstime }}) {\r\n    this.timePing = mstime\r\n\r\n    if(this.checkPlayersPong()) {\r\n      this.timeout = this.timePing\r\n      this.clearPongs()\r\n      this.send(pingEvent)\r\n\r\n      this.send(update, { state: this.getPlayers() })\r\n      this.send(updateCountEvent, { state: this._players.size })\r\n    } else if(this.timePing - this.timeout > MSTIMELIMIT) {\r\n      this.timeout = this.timePing\r\n      this.runOutTimeout()\r\n\r\n      this.send(update, { state: this.getPlayers() })\r\n      this.send(updateCountEvent, { state: this._players.size })\r\n    }\r\n  }\r\n\r\n  getPlayers() {\r\n    const players = []\r\n\r\n    for (const [uuid, player] of this._players) {\r\n      players.push({ uuid })\r\n    }\r\n\r\n    return players\r\n  }\r\n\r\n  checkPlayersPong() {\r\n    let allPong = true\r\n    for (const [uuid, player] of this._players) {\r\n      allPong &= player.pong\r\n    }\r\n\r\n    return allPong\r\n  }\r\n\r\n  clearPongs() {\r\n    for (const [uuid, player] of this._players) {\r\n      player.pong = false\r\n    }\r\n  }\r\n\r\n  runOutTimeout() {\r\n    this.clearPlayersWithoutPong()\r\n    this.send(pingEvent)\r\n  }\r\n\r\n  clearPlayersWithoutPong() {\r\n    for (const [uuid, player] of this._players) {\r\n      if(!player.pong)\r\n        this.diconnectedPlayers(uuid)\r\n    }\r\n  }\r\n\r\n  diconnectedPlayers(playerUuid) {\r\n    this._players.delete(playerUuid)\r\n    this.send(updateCountEvent, { state: this._players.size })\r\n    this.send(disconnectedEvent, { state: playerUuid })\r\n  }\r\n}\r\n\r\nmodule.exports = { PlayersManager }\n\n//# sourceURL=webpack://tmb-host/./src/players-manager/index.js?");

/***/ }),

/***/ "./src/spawns/index.js":
/*!*****************************!*\
  !*** ./src/spawns/index.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member, Types, events: { time } } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst genUuid = Types.UUID.Def().rand\r\n\r\nconst addEvent = __webpack_require__(/*! ../events/objects/add-spawn */ \"./src/events/objects/add-spawn.js\")\r\nconst freeSpawnsEvent = __webpack_require__(/*! ../events/objects/free-spawns */ \"./src/events/objects/free-spawns.js\")\r\nconst spawnEvent = __webpack_require__(/*! ../events/objects/spawn-character */ \"./src/events/objects/spawn-character.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/objects/ready-spawned */ \"./src/events/objects/ready-spawned.js\")\r\n\r\nclass Spawns extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this._spawns = new Map\r\n    this.queue = []\r\n    \r\n    this.onEvent(addEvent, payload => this.addSpawn(payload))\r\n    this.onEvent(time, () => this.checkSpawns())\r\n    this.onEvent(spawnEvent, payload => this.setupSpawningCharacter(payload))\r\n  }\r\n\r\n  addSpawn({ spawn }) {\r\n    spawn.uuid = genUuid()\r\n    spawn.isFree = true\r\n    this._spawns.set(spawn.uuid, spawn)\r\n  }\r\n\r\n  getFreeSpawns() {\r\n    const spawns = [...this._spawns.values()]\r\n\r\n    return spawns\r\n    .filter(spawn => spawn.isFree)\r\n    .map(value => ({ value, sort: Math.random() }))\r\n    .sort((a, b) => a.sort - b.sort)\r\n    .map(({ value }) => value)\r\n  }\r\n\r\n  checkSpawns() {\r\n    if(this._spawns.size === 0)\r\n      return\r\n    \r\n    this.spawnCharacters()\r\n\r\n    this.send(freeSpawnsEvent, {\r\n      spawns: this.getFreeSpawns()\r\n    })\r\n  }\r\n  \r\n  setupSpawningCharacter({ spawnUuid, characterUuid}) {\r\n    this.queue.push( {spawnUuid, characterUuid })\r\n  }\r\n\r\n  spawnCharacters() {\r\n    if(this.queue.length == 0) return\r\n\r\n    const { spawnUuid, characterUuid} = this.queue.shift()\r\n\r\n    const spawn = this._spawns.get(spawnUuid)\r\n    const position = {\r\n      x: spawn.position.x,\r\n      y: spawn.position.y\r\n    }\r\n\r\n    this.setCooldawn(spawn)\r\n    this.send(readyEvent, { spawnUuid, characterUuid, position })\r\n  }\r\n\r\n  setCooldawn(spawn){\r\n    spawn.isFree = false\r\n    setTimeout(() => spawn.isFree = true, spawn.calldown || 60*1000)\r\n  }\r\n}\r\n\r\n\r\nmodule.exports = { Spawns }\n\n//# sourceURL=webpack://tmb-host/./src/spawns/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst { Parser } = __webpack_require__(/*! ./parser */ \"./src/store/parser.js\")\r\n\r\nconst loadEvent = __webpack_require__(/*! ../events/load-resources */ \"./src/events/load-resources.js\")\r\nconst sendDataEvent = __webpack_require__(/*! ../events/load-data */ \"./src/events/load-data.js\")\r\n\r\nconst { default: { tileMap } } = __webpack_require__(/*! ../assets/world.yaml */ \"./src/assets/world.yaml\")\r\nconst { default: characters } = __webpack_require__(/*! ../assets/characters.yaml */ \"./src/assets/characters.yaml\")\r\nconst { default: bullets } = __webpack_require__(/*! ../assets/characters.yaml */ \"./src/assets/characters.yaml\")\r\n\r\nclass Store extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this.onEvent(loadEvent, () => this.loadResources())\r\n  }\r\n\r\n  loadResources () {\r\n    const resources = {}\r\n    resources.physic = {\r\n      limitsRect: {\r\n        x: -1 * tileMap.padding * tileMap.tileSize.width,\r\n        y: -1 * tileMap.padding * tileMap.tileSize.height,\r\n        height: (tileMap.size.height + tileMap.padding) * tileMap.tileSize.height,\r\n        width: (tileMap.size.width + tileMap.padding) * tileMap.tileSize.width\r\n      }\r\n    }\r\n\r\n    const parser = new Parser\r\n    resources.tileMap = parser.parsing(tileMap)\r\n\r\n    resources.characters = characters\r\n    resources.bullets = bullets\r\n\r\n    this.sendResources(resources)\r\n  }\r\n\r\n  sendResources (resources) {\r\n    this.send(sendDataEvent, { resources })\r\n  }\r\n}\r\n\r\nmodule.exports = { Store }\n\n//# sourceURL=webpack://tmb-host/./src/store/index.js?");

/***/ }),

/***/ "./src/store/parser.js":
/*!*****************************!*\
  !*** ./src/store/parser.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Tileset } = __webpack_require__(/*! ./tileset */ \"./src/store/tileset.js\")\r\n\r\nclass Parser {\r\n\r\n  constructor() {\r\n    this.tilesets = [null]\r\n    this.grounds = []\r\n    this.walls = []\r\n  }\r\n\r\n  parsing(tileMap) {\r\n    this.getTilesets(tileMap.tilesets)\r\n\r\n    this.tileSize = { ...tileMap.tileSize }\r\n\r\n    tileMap.layers\r\n    .filter(layer => layer.type == \"ground\")\r\n    .forEach(layer => this.getGrounds(layer))\r\n\r\n    tileMap.layers\r\n    .filter(layer => layer.type == \"walls\")\r\n    .forEach(layer => this.getWalls(layer))\r\n\r\n    return {\r\n      tileSize: this.tileSize,\r\n      grounds: this.grounds,\r\n      walls: this.walls\r\n    }\r\n  }\r\n\r\n  getTilesets(tilesets) {\r\n    tilesets.forEach(({\r\n      tilesetUid,\r\n      tileSize,\r\n      size,\r\n      texture,\r\n      extraTiles\r\n    }) => {\r\n      const tileset = new Tileset({\r\n        tilesetUid,\r\n        tileSize,\r\n        size,\r\n        texture,\r\n        extraTiles\r\n      })\r\n      this.tilesets[tileset.uid] = tileset\r\n    });\r\n  }\r\n\r\n  getTilesFromTilesets(tilesetsIds) {\r\n    return tilesetsIds.reduce((tiles, tilesetId) => tiles.concat(this.tilesets[tilesetId].tiles), [null])\r\n  }\r\n\r\n  getGrounds({\r\n    type,\r\n    tiles: tilesIds,\r\n    tilesets: tilesetsIds,\r\n    size: {\r\n      height: rows,\r\n      width: columns\r\n    },\r\n  }) {\r\n\r\n    if(tilesIds.length !== rows * columns)\r\n      throw new TypeError(\"Inccorect number tiles in layer!\")\r\n\r\n    const tiles = this.getTilesFromTilesets(tilesetsIds)\r\n    \r\n    for (let r = 0; r < rows; r++) {\r\n      for (let c = 0; c < columns; c++) {\r\n        const tileId = tilesIds[r*columns + c]\r\n\r\n        if(tileId >>> 29 != 0)\r\n          throw new TypeError(\"Tile has flip or turn!\")\r\n\r\n        if(tileId == 0)\r\n          continue\r\n\r\n        if(!tiles[tileId])\r\n          throw new TypeError(`TileId in Ground is undefined! TileId: ${tileId}`)\r\n\r\n        const tile = tiles[tileId].copy()\r\n\r\n        tile.type = type\r\n        tile.position = {\r\n          row: r,\r\n          column: c\r\n        }\r\n\r\n        this.grounds.push(tile)\r\n      }\r\n    }\r\n  }\r\n\r\n  getWalls({\r\n    type,\r\n    tiles: tilesIds,\r\n    tilesets: tilesetsIds,\r\n    size: {\r\n      height: rows,\r\n      width: columns\r\n    },\r\n    walls = [],\r\n    spawns = []\r\n  }) {\r\n\r\n    if(tilesIds.length !== rows * columns)\r\n      throw new TypeError(\"Inccorect number tiles in layer!\")\r\n\r\n    const tiles = this.getTilesFromTilesets(tilesetsIds)\r\n    \r\n    if(Array.isArray(spawns))\r\n      spawns = this.parsingList(spawns)\r\n      \r\n    if(Array.isArray(walls))\r\n      walls = this.parsingList(walls)\r\n    \r\n    for (let r = 0; r < rows; r++) {\r\n      for (let c = 0; c < columns; c++) {\r\n        const tileId = tilesIds[r*columns + c]\r\n\r\n        const tile = this.parsingWall({ \r\n          tileId, \r\n          type,\r\n          position: {\r\n            row: r,\r\n            column: c\r\n          },\r\n          tiles, \r\n          walls, \r\n          spawns\r\n        })\r\n\r\n        if(tile)\r\n          this.walls.push(tile)\r\n      }\r\n    }\r\n  }\r\n\r\n  parsingWall({ tileId, type, tiles, walls, spawns, position}) {\r\n    if(tileId >>> 29 != 0)\r\n          throw new TypeError(\"Tile has flip or turn!\")\r\n\r\n    if(tileId == 0)\r\n      return\r\n\r\n    if(!tiles[tileId])\r\n      throw new TypeError(`TileId in Walls is undefined! TileId: ${tileId}`)\r\n\r\n    const tile = tiles[tileId].copy()\r\n    tile.type = type\r\n    tile.position = position\r\n\r\n    if(walls.has(tileId)) {\r\n      const wall = walls.get(tileId)\r\n\r\n      if(wall.hp) {\r\n        tile.hp = wall.hp\r\n        tile.isApplyDamage = true\r\n      }\r\n\r\n      tile.half = wall.half\r\n    }\r\n\r\n    if(spawns.has(tileId)) {\r\n      const spawn = spawns.get(tileId)\r\n      tile.isSpawn = true\r\n      tile.spawn = {\r\n        calldown: (spawn.calldown || 0) * 1000\r\n      }\r\n    }\r\n      \r\n\r\n    return tile\r\n  }\r\n\r\n  parsingList(array) {\r\n    const map = new Map\r\n    array.forEach(tile => map.set(tile.tileId, tile))\r\n\r\n    return map\r\n  }\r\n}\r\n\r\nmodule.exports = { Parser }\n\n//# sourceURL=webpack://tmb-host/./src/store/parser.js?");

/***/ }),

/***/ "./src/store/tile.js":
/*!***************************!*\
  !*** ./src/store/tile.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst genUuid = Types.UUID.Def().rand\r\n\r\nclass Tile {\r\n  constructor({ \r\n    tileset, \r\n    tilesetRect: {\r\n      tHeight,\r\n      tWidth,\r\n      row,\r\n      column\r\n    }\r\n  }) {\r\n    this.tileset = tileset\r\n    this.tilesetRect = {\r\n      height: tHeight,\r\n      width: tWidth,\r\n      x: column * tWidth,\r\n      y: row * tHeight,\r\n    }\r\n  }\r\n\r\n  copy() {\r\n    return {\r\n      uuid: genUuid(),\r\n      texture: this.tileset.texture,\r\n      tilesetRect: {\r\n        height: this.tilesetRect.height,\r\n        width: this.tilesetRect.width,\r\n        x: this.tilesetRect.x,\r\n        y: this.tilesetRect.y,\r\n      },\r\n      isExtra: this.isExtra,\r\n      bottomView: this.bottomView\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { Tile }\n\n//# sourceURL=webpack://tmb-host/./src/store/tile.js?");

/***/ }),

/***/ "./src/store/tileset.js":
/*!******************************!*\
  !*** ./src/store/tileset.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Tile } = __webpack_require__(/*! ./tile */ \"./src/store/tile.js\")\r\n\r\nclass Tileset {\r\n  constructor({\r\n    tilesetUid,\r\n    tileSize,\r\n    size,\r\n    texture,\r\n    extraTiles\r\n  }) {\r\n    this.uid = tilesetUid\r\n    this.tiles = []\r\n    this.texture = texture\r\n    this.targets = {}\r\n\r\n    this.createTiles(tileSize, size)\r\n  }\r\n\r\n  createTiles({ height: tHeight, width: tWidth }, { height, width }) {\r\n\r\n    for (let row = 0; row < height; row++) {\r\n      for (let column = 0; column < width; column++) {\r\n        const newTile = new Tile({ \r\n          tileset: this, \r\n          tilesetRect: {\r\n            tHeight,\r\n            tWidth,\r\n            row,\r\n            column\r\n          }\r\n        })\r\n\r\n        this.tiles.push(newTile)\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = { Tileset }\n\n//# sourceURL=webpack://tmb-host/./src/store/tileset.js?");

/***/ }),

/***/ "./src/tiles/chunks-list.js":
/*!**********************************!*\
  !*** ./src/tiles/chunks-list.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst genUuid = Types.UUID.Def().rand\r\n\r\nconst { Plan, PlanWithBorder }  = __webpack_require__(/*! ./plan */ \"./src/tiles/plan.js\")\r\n\r\nconst CHUNK_LIMIT = 256\r\n\r\nclass ChunksList extends Map {\r\n  constructor(type, tileSize) {\r\n    super()\r\n\r\n    this.type = type\r\n    this.tileSize = { ...tileSize }\r\n\r\n    this.plan = type === \"ground\" ? new PlanWithBorder : new Plan\r\n\r\n    this.current = new Chunk(this.plan)\r\n    this.set(this.current.uuid, this.current)\r\n  }\r\n\r\n  get size() {\r\n    let sum = 0\r\n    for (const [_, chunk] of this) {\r\n      sum += chunk.size\r\n    }\r\n\r\n    return sum\r\n  }\r\n\r\n  add(tile) {\r\n    const chunk = this.getEmptyChunck()\r\n    chunk.add(tile)\r\n    this.plan.add(tile)\r\n  }\r\n\r\n  delete(uuid, chunkUuid) {\r\n    const chunk = this.get(chunkUuid)\r\n    const { position } = chunk.get(uuid)\r\n    chunk.delete(uuid)\r\n    return this.plan.delete(position)\r\n  }\r\n\r\n  getTileByUuid(uuid) {\r\n    for (const [_, chunk] of this) {\r\n      if(chunk.has(uuid))\r\n        return chunk.get(uuid)\r\n    }\r\n  }\r\n\r\n  getEmptyChunck() {\r\n    if(this.current.size < CHUNK_LIMIT)\r\n      return this.current\r\n\r\n    const emptyChunk = new Chunk(this.plan)\r\n    for (const [uuid, chunk] of this) {\r\n      if(chunk.size < emptyChunk.size || (emptyChunk.size === 0 && chunk.size < CHUNK_LIMIT))\r\n        emptyChunk = chunk\r\n    }\r\n\r\n    this.current = emptyChunk\r\n\r\n    if(emptyChunk.size === 0)\r\n      this.set(emptyChunk.uuid, emptyChunk)\r\n\r\n    return this.current\r\n  }\r\n\r\n  toDrawLayers() {\r\n    const layers = []\r\n    for (const [uuid, chunk] of this) {\r\n      layers.push({\r\n        uuid: uuid,\r\n        type: this.type,\r\n        tileSize: this.tileSize,\r\n        tiles: chunk.toDrawTiles()\r\n      })\r\n    }\r\n\r\n    return layers\r\n  }\r\n}\r\n\r\nclass Chunk extends Map {\r\n  constructor(plan) {\r\n    super()\r\n\r\n    this.uuid = genUuid()\r\n    this.plan = plan\r\n  }\r\n\r\n  add(tile) {\r\n    tile.chunkUuid = this.uuid\r\n    super.set(tile.uuid, tile)\r\n  }\r\n\r\n  delete(uuid) {\r\n    super.delete(uuid)\r\n  }\r\n\r\n  toDrawTiles() {\r\n    const tiles = []\r\n    for(const [uuid, tile] of this) {\r\n      const { row, column } = tile.position\r\n      const tileToDraw = {\r\n        uuid: tile.uuid,\r\n        texture: tile.texture,\r\n        position: { row, column },\r\n        frame: { ...tile.tilesetRect },\r\n        isSpawn: tile.isSpawn\r\n      }\r\n\r\n      tiles.push(tileToDraw)\r\n    }\r\n    return tiles\r\n  }\r\n}\r\n\r\nmodule.exports = { ChunksList }\n\n//# sourceURL=webpack://tmb-host/./src/tiles/chunks-list.js?");

/***/ }),

/***/ "./src/tiles/index.js":
/*!****************************!*\
  !*** ./src/tiles/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst { ChunksList } = __webpack_require__(/*! ./chunks-list */ \"./src/tiles/chunks-list.js\")\r\n\r\nconst loadEvent = __webpack_require__(/*! ../events/load-data */ \"./src/events/load-data.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/ready-system */ \"./src/events/ready-system.js\")\r\n\r\nconst addSpwanEvent = __webpack_require__(/*! ../events/objects/add-spawn */ \"./src/events/objects/add-spawn.js\")\r\nconst createWallsEvent = __webpack_require__(/*! ../events/objects/create-walls-object */ \"./src/events/objects/create-walls-object.js\")\r\nconst removeWallsEvent = __webpack_require__(/*! ../events/objects/remove-walls-object */ \"./src/events/objects/remove-walls-object.js\")\r\nconst physicUpdateEvent = __webpack_require__(/*! ../events/objects/update-physic */ \"./src/events/objects/update-physic.js\")\r\nconst updateObjectsTilesCoordintesEvent = __webpack_require__(/*! ../events/objects/update-objects-tiles-coordintes */ \"./src/events/objects/update-objects-tiles-coordintes.js\")\r\n\r\nconst updateWallsCount = __webpack_require__(/*! ../events/objects/update-walls-count */ \"./src/events/objects/update-walls-count.js\")\r\nconst updatePlatformsCount = __webpack_require__(/*! ../events/objects/update-platforms-count */ \"./src/events/objects/update-platforms-count.js\")\r\n\r\nconst createHPEvent = __webpack_require__(/*! ../events/objects/create-hp */ \"./src/events/objects/create-hp.js\")\r\nconst deleteHPEvent = __webpack_require__(/*! ../events/objects/remove-hp */ \"./src/events/objects/remove-hp.js\")\r\nconst destroyEvent = __webpack_require__(/*! ../events/objects/destroyed-object */ \"./src/events/objects/destroyed-object.js\")\r\nconst updateEvent = __webpack_require__(/*! ../events/objects/update-tiles */ \"./src/events/objects/update-tiles.js\")\r\n\r\nclass Tiles extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this.grounds = null\r\n    this.walls = null\r\n\r\n    // this.onEvent(loadTilesEvent, payload => this.load(payload))\r\n    this.onEvent(loadEvent, payload => this.load(payload))\r\n  }\r\n\r\n  load({ resources: { tileMap: { grounds, walls, tileSize } } }) {\r\n    this.grounds = new ChunksList(\"ground\", tileSize)\r\n    this.walls = new ChunksList(\"walls\", tileSize)\r\n\r\n    grounds.forEach(ground => this.addGround(ground))\r\n    this.updateOutWalls()\r\n\r\n    walls.forEach(wall => this.addWall(wall))\r\n\r\n    this.onEvent(physicUpdateEvent, payload => this.physicUpdated(payload))\r\n    this.onEvent(destroyEvent, payload => this.destroy(payload))\r\n\r\n    this.send(readyEvent, { state: { system: \"Tiles\" }})\r\n  }\r\n\r\n  addGround(ground) {\r\n    this.grounds.add(ground)\r\n  }\r\n\r\n  addWall(wall) {\r\n    this.walls.add(wall)\r\n\r\n    if(wall.isSpawn)\r\n      return this.addSpawn(wall)\r\n    \r\n    const { uuid, isApplyDamage, hp, damage, position } = wall\r\n    this.send(createHPEvent,  { state:  { \r\n      uuid, \r\n      hp, \r\n      damage: damage,\r\n      isApplyDamage\r\n    }})\r\n    \r\n    this.send(createWallsEvent, { state: {\r\n      uuid,\r\n      position: { ...position },\r\n      tileSize: { ...this.walls.tileSize },\r\n      half: wall.half\r\n    }})\r\n  }\r\n\r\n  addOutWall({ uuid, position }) {\r\n    this.send(createWallsEvent, { state: {\r\n      uuid,\r\n      position: { ...position },\r\n      tileSize: { ...this.walls.tileSize }\r\n    }})\r\n  }\r\n\r\n  addSpawn({ \r\n    position: {\r\n      column,\r\n      row\r\n    },\r\n    tilesetRect: {\r\n      width,\r\n      height\r\n    },\r\n    spawn\r\n  }) {\r\n    spawn.position = {\r\n      x: column * width,\r\n      y: row * height,\r\n    }\r\n    this.send(addSpwanEvent, { spawn })\r\n  }\r\n\r\n\r\n  destroy({ state: uuid }) {\r\n    const wall = this.walls.getTileByUuid(uuid)\r\n    if(wall)\r\n      this.deleteWall(wall)\r\n  }\r\n\r\n  deleteWall(wall) {\r\n    const { uuid, chunkUuid } = wall\r\n\r\n    this.walls.delete(uuid, chunkUuid)\r\n    this.send(deleteHPEvent, { state: uuid })\r\n    this.send(removeWallsEvent, { state: uuid })\r\n  }\r\n\r\n  updateOutWalls() {\r\n    const { added } = this.grounds.plan.getCellsOut()\r\n    // added.forEach(outWall => this.addOutWall(outWall))\r\n    this.grounds.plan.clearCellsOut()\r\n  }\r\n\r\n  physicUpdated({ state: objects }) {\r\n    \r\n    this.updateTilesCoordinteObjects(objects)\r\n\r\n    this.send(updateEvent, {\r\n      state: this.serialize()\r\n    })\r\n\r\n    this.send(updateWallsCount, {\r\n      state: this.walls.size\r\n    })\r\n\r\n    this.send(updatePlatformsCount, {\r\n      state: this.grounds.size\r\n    })\r\n  }\r\n\r\n  updateTilesCoordinteObjects(objects) {\r\n    const tilesCoordinteObjects = {}\r\n    for (const key in objects) {\r\n      tilesCoordinteObjects[key] = this.getTilesCoordinate(objects[key])\r\n      tilesCoordinteObjects[key].isOnGround = !!this.grounds.plan.get(tilesCoordinteObjects[key]).uuid\r\n    }\r\n\r\n    this.send(updateObjectsTilesCoordintesEvent, {\r\n      state: tilesCoordinteObjects\r\n    })\r\n  }\r\n\r\n  getTilesCoordinate({ x, y, pivot, vx, vy }) {\r\n    const { height, width } = this.grounds.tileSize\r\n    return {\r\n      row: Math.floor((x + pivot.x - (vx * 0.05 )) / width),\r\n      column: Math.floor((y + pivot.y - (vy * 0.05 )) / height)\r\n    }\r\n  }\r\n\r\n  serialize() {\r\n    const layers = [\r\n      ...this.grounds.toDrawLayers(),\r\n      ...this.walls.toDrawLayers()\r\n    ]\r\n\r\n    return { layers }\r\n  }\r\n}\r\n\r\nmodule.exports = { Tiles }\n\n//# sourceURL=webpack://tmb-host/./src/tiles/index.js?");

/***/ }),

/***/ "./src/tiles/plan.js":
/*!***************************!*\
  !*** ./src/tiles/plan.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst genUuid = Types.UUID.Def().rand\r\n\r\nclass Plan {\r\n  constructor() {\r\n    this._size = 0\r\n    this._lists = {}\r\n  }\r\n\r\n  get size() {\r\n    return this._size\r\n  }\r\n\r\n  add(tile) {\r\n    const { row, column} = tile.position\r\n\r\n    if(!this._lists[row])\r\n      this._lists[row] = {}\r\n\r\n    if(!this._lists[row][column]) {\r\n      this._lists[row][column] = tile\r\n      this._size++\r\n    }\r\n  }\r\n\r\n  get({ row, column }) {\r\n    if(!this._lists[row])\r\n      this._lists[row] = []\r\n\r\n    if(this._lists[row][column])\r\n      return this._lists[row][column]\r\n    else\r\n      return { position: { row, column } }\r\n  }\r\n\r\n  has({ row, column }) {\r\n    return this._lists[row] && this._lists[row][column]\r\n  }\r\n\r\n  getNeighbours({ row, column }) {\r\n    return {\r\n      right:  this.get({ row: row,   column: column + 1 }),\r\n      bottom: this.get({ row: row+1, column: column }),\r\n      left:   this.get({ row: row,   column: column - 1 }),\r\n      top:    this.get({ row: row-1, column: column }),\r\n    }\r\n  }\r\n\r\n  toArray() {\r\n    const array = []\r\n    for (const row in this._lists) {\r\n      for (const column in this._lists[row]) {\r\n        array.push(this._lists[row][column])\r\n      }\r\n    }\r\n\r\n    return array\r\n  }\r\n\r\n  delete({ row, column }) {\r\n    if(!this._lists[row])\r\n      return\r\n\r\n    if(this._lists[row][column]) {\r\n      const tile = this._lists[row][column]\r\n      delete this._lists[row][column]\r\n      this._size--\r\n      return tile\r\n    }\r\n  }\r\n}\r\n\r\nclass PlanWithBorder extends Plan {\r\n  constructor() {\r\n    super()\r\n\r\n    this.cells = new Plan\r\n    this.cellsOut = new Plan\r\n    this.addedCellsOut = new Plan\r\n    this.deletedCellsOut = new Plan\r\n  }\r\n\r\n  add(tile) {\r\n    super.add(tile)\r\n\r\n    this.delCellOut(tile.position)\r\n      \r\n    const neighbours = this.getNeighbours(tile.position)\r\n\r\n    let isFull = true\r\n    for (const direct in neighbours) {\r\n      const { uuid, position } = neighbours[direct]\r\n      if(uuid) {\r\n        this.checkFullNeighbour(position)\r\n      }\r\n      else {\r\n        isFull = false\r\n        this.addCellOut(position)\r\n      }\r\n    }\r\n\r\n    if(!isFull)\r\n      this.addCell(tile.position)\r\n  }\r\n\r\n  addCell(position) {\r\n    this.cells.add({ position })\r\n  }\r\n\r\n  delCell(position) {\r\n    this.cells.delete(position)\r\n  }\r\n\r\n  addCellOut(position) {\r\n    if(this.cellsOut.has(position))\r\n      return\r\n\r\n    const newCell = { uuid: genUuid(), position }\r\n    this.cellsOut.add(newCell)\r\n\r\n    if(this.deletedCellsOut.has(position))\r\n      this.deletedCellsOut.delete(position)\r\n    else\r\n      this.addedCellsOut.add(newCell)\r\n  }\r\n\r\n\r\n  delCellOut(position) {\r\n    if(!this.cellsOut.has(position))\r\n      return\r\n\r\n    const cell = this.cellsOut.get(position)\r\n    this.cellsOut.delete(position)\r\n\r\n    if(this.addedCellsOut.has(position))\r\n      this.addedCellsOut.delete(position)\r\n    else\r\n      this.deletedCellsOut.add(cell)\r\n  }\r\n\r\n  getCellsOut() {\r\n    return {\r\n      added: this.addedCellsOut.toArray(),\r\n      deleted: this.deletedCellsOut.toArray()\r\n    }\r\n  }\r\n\r\n  clearCellsOut() {\r\n    this.addedCellsOut = new Plan\r\n    this.deletedCellsOut = new Plan\r\n  }\r\n\r\n  checkFullNeighbour(position) {\r\n    if(!this.cells.has(position))\r\n      return\r\n\r\n    if(this.checkFull(position))\r\n      this.delCell(position)\r\n  }\r\n\r\n  checkFull(position) {\r\n    const neighbours = this.getNeighbours(position)\r\n\r\n    let isFull = true\r\n    for (const direct in neighbours) {\r\n      if(!neighbours[direct].uuid)\r\n        isFull = false\r\n    }\r\n\r\n    return isFull\r\n  }\r\n}\r\n\r\nmodule.exports = { Plan, PlanWithBorder }\n\n//# sourceURL=webpack://tmb-host/./src/tiles/plan.js?");

/***/ }),

/***/ "./src/types/player.js":
/*!*****************************!*\
  !*** ./src/types/player.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Types } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst MAX_PLAYERS = 50\r\nconst PlayerType = Types.Object.Def({\r\n  uuid: Types.UUID.Def()\r\n})\r\nconst PlayersListType = Types.Array.Def(PlayerType, MAX_PLAYERS, true)\r\nmodule.exports = {\r\n  PlayerType,\r\n  PlayersListType\r\n}\n\n//# sourceURL=webpack://tmb-host/./src/types/player.js?");

/***/ }),

/***/ "./src/uee.js":
/*!********************!*\
  !*** ./src/uee.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { UnitedEventsEnvironment: UEE } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\nconst { WsTransport } = __webpack_require__(/*! @ellementul/uee-ws-browser-transport */ \"./node_modules/@ellementul/uee-ws-browser-transport/index.js\")\r\nconst { Logging } = __webpack_require__(/*! ./logging */ \"./src/logging.js\")\r\n\r\nconst { GameSession } = __webpack_require__(/*! ./game-session */ \"./src/game-session/index.js\")\r\nconst { PlayersManager } = __webpack_require__(/*! ./players-manager */ \"./src/players-manager/index.js\")\r\nconst { World } = __webpack_require__(/*! ./world */ \"./src/world/index.js\")\r\nconst { Store } = __webpack_require__(/*! ./store */ \"./src/store/index.js\")\r\nconst { Physic } = __webpack_require__(/*! ./physic */ \"./src/physic/index.js\")\r\nconst { Tiles } = __webpack_require__(/*! ./tiles */ \"./src/tiles/index.js\")\r\nconst { Spawns } = __webpack_require__(/*! ./spawns */ \"./src/spawns/index.js\")\r\nconst { CharactersManager } = __webpack_require__(/*! ./characters */ \"./src/characters/index.js\")\r\nconst { BulletsManager } = __webpack_require__(/*! ./bullets */ \"./src/bullets/index.js\")\r\nconst { HPDamage } = __webpack_require__(/*! ./hp-damage */ \"./src/hp-damage/index.js\")\r\n\r\nconst membersList = {\r\n  roles: [\r\n    GameSession,\r\n    PlayersManager,\r\n    World,\r\n    Store,\r\n    Physic,\r\n    Tiles,\r\n    Spawns,\r\n    CharactersManager,\r\n    BulletsManager,\r\n    HPDamage\r\n  ]\r\n}\r\n\r\nenv = new UEE({\r\n  Transport: WsTransport,\r\n  membersList,\r\n  logging: Logging(),\r\n  isShowErrors: true\r\n})\r\n\r\n\r\nenv.run({\r\n  isHost: true,\r\n  signalServerAddress: \"ws://192.168.0.5:8080\",\r\n})\n\n//# sourceURL=webpack://tmb-host/./src/uee.js?");

/***/ }),

/***/ "./src/world/index.js":
/*!****************************!*\
  !*** ./src/world/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Member } = __webpack_require__(/*! @ellementul/united-events-environment */ \"./node_modules/@ellementul/united-events-environment/index.js\")\r\n\r\nconst loadWorldEvent = __webpack_require__(/*! ../events/load-world */ \"./src/events/load-world.js\")\r\nconst loadResorcesEvent = __webpack_require__(/*! ../events/load-resources */ \"./src/events/load-resources.js\")\r\nconst readySubSystemEvent = __webpack_require__(/*! ../events/ready-system */ \"./src/events/ready-system.js\")\r\nconst readyEvent = __webpack_require__(/*! ../events/ready-world */ \"./src/events/ready-world.js\")\r\n\r\nclass World extends Member {\r\n  constructor() {\r\n    super()\r\n\r\n    this.neededSytsems = {\r\n      Physic: false,\r\n      Tiles: false,\r\n      Characters: false,\r\n      Bullets: false\r\n    }\r\n\r\n    this.onEvent(loadWorldEvent, () => this.load())\r\n  }\r\n\r\n  load() {\r\n    console.log(\"Loading systems...\")\r\n    this.onEvent(readySubSystemEvent, payload => this.readySystem(payload))\r\n    \r\n    this.send(loadResorcesEvent)\r\n  }\r\n\r\n  checkSystems() {\r\n    return Object.values(this.neededSytsems).every(readySystem => readySystem)\r\n  }\r\n\r\n  readySystem({ state: { system } }) {\r\n\r\n    this.neededSytsems[system] = true\r\n    console.log(`The ${system} system  is ready`)\r\n    if(this.checkSystems())\r\n      this.start()\r\n  }\r\n\r\n  start() {\r\n    console.log(\"Ready all systems!\")\r\n    this.send(readyEvent)\r\n  }\r\n}\r\n\r\nmodule.exports = { World }\n\n//# sourceURL=webpack://tmb-host/./src/world/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ellementul_uee-ws-browser-transport_index_js-node_modules_ellementul_uni-9ff3ba"], () => (__webpack_require__("./src/uee.js")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_uee_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktmb_host"] = self["webpackChunktmb_host"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e("vendors-node_modules_ellementul_uee-ws-browser-transport_index_js-node_modules_ellementul_uni-9ff3ba").then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;