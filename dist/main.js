/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst clientes_module_1 = __webpack_require__(/*! ./clientes/clientes.module */ \"./src/clientes/clientes.module.ts\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst config_1 = __webpack_require__(/*! @nestjs/config */ \"@nestjs/config\");\nlet AppModule = class AppModule {\n};\nexports.AppModule = AppModule;\nexports.AppModule = AppModule = __decorate([\n    (0, common_1.Module)({\n        imports: [\n            config_1.ConfigModule.forRoot(),\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'postgres',\n                host: process.env.DB_HOST,\n                port: 5432,\n                username: process.env.DB_USER,\n                password: process.env.DB_PASS,\n                database: process.env.DB_NAME,\n                autoLoadEntities: true,\n                synchronize: false\n            }),\n            clientes_module_1.ClientesModule\n        ],\n        controllers: [],\n        providers: []\n    })\n], AppModule);\n\n\n//# sourceURL=webpack://ts-demo/./src/app.module.ts?");

/***/ }),

/***/ "./src/clientes/cliente.dto.ts":
/*!*************************************!*\
  !*** ./src/clientes/cliente.dto.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClienteDTO = void 0;\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nclass ClienteDTO {\n    constructor(id, nombre, apellido, tipoDoc, nroDoc, nroTelPrinc, nroTelSec, email) {\n        this.id = id;\n        this.nombre = nombre;\n        this.apellido = apellido;\n        this.tipo_doc = tipoDoc;\n        this.nro_doc = nroDoc;\n        this.nro_tel_princ = nroTelPrinc;\n        this.nro_tel_sec = nroTelSec;\n        this.email = email;\n    }\n}\nexports.ClienteDTO = ClienteDTO;\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", Number)\n], ClienteDTO.prototype, \"id\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"nombre\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"apellido\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"tipo_doc\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"nro_doc\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"nro_tel_princ\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"nro_tel_sec\", void 0);\n__decorate([\n    (0, swagger_1.ApiProperty)(),\n    __metadata(\"design:type\", String)\n], ClienteDTO.prototype, \"email\", void 0);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/cliente.dto.ts?");

/***/ }),

/***/ "./src/clientes/cliente.entity.ts":
/*!****************************************!*\
  !*** ./src/clientes/cliente.entity.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClienteEntity = void 0;\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet ClienteEntity = class ClienteEntity {\n    constructor(id, nombre, apellido, tipoDoc, nroDoc, nroTelPrinc, nroTelSec, email) {\n        this.id = id;\n        this.nombre = nombre;\n        this.apellido = apellido;\n        this.tipo_doc = tipoDoc;\n        this.nro_doc = nroDoc;\n        this.nro_tel_princ = nroTelPrinc;\n        this.nro_tel_sec = nroTelSec;\n        this.email = email;\n    }\n};\nexports.ClienteEntity = ClienteEntity;\n__decorate([\n    (0, typeorm_1.PrimaryColumn)(),\n    __metadata(\"design:type\", Number)\n], ClienteEntity.prototype, \"id\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: false }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"nombre\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: false }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"apellido\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: false }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"tipo_doc\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: false }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"nro_doc\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: false }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"nro_tel_princ\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"nro_tel_sec\", void 0);\n__decorate([\n    (0, typeorm_1.Column)({ nullable: true }),\n    __metadata(\"design:type\", String)\n], ClienteEntity.prototype, \"email\", void 0);\nexports.ClienteEntity = ClienteEntity = __decorate([\n    (0, typeorm_1.Entity)('clientes'),\n    __metadata(\"design:paramtypes\", [Number, String, String, String, String, String, String, String])\n], ClienteEntity);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/cliente.entity.ts?");

/***/ }),

/***/ "./src/clientes/cliente.mapper.ts":
/*!****************************************!*\
  !*** ./src/clientes/cliente.mapper.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClienteMapper = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cliente_dto_1 = __webpack_require__(/*! ./cliente.dto */ \"./src/clientes/cliente.dto.ts\");\nconst cliente_entity_1 = __webpack_require__(/*! ./cliente.entity */ \"./src/clientes/cliente.entity.ts\");\nlet ClienteMapper = class ClienteMapper {\n    dtoToEntity(clienteDTO) {\n        return new cliente_entity_1.ClienteEntity(clienteDTO.id, clienteDTO.nombre, clienteDTO.apellido, clienteDTO.tipo_doc, clienteDTO.nro_doc, clienteDTO.nro_tel_princ, clienteDTO.nro_tel_sec, clienteDTO.email);\n    }\n    entityToDto(clienteEntity) {\n        return new cliente_dto_1.ClienteDTO(clienteEntity.id, clienteEntity.nombre, clienteEntity.apellido, clienteEntity.tipo_doc, clienteEntity.nro_doc, clienteEntity.nro_tel_princ, clienteEntity.nro_tel_sec, clienteEntity.email);\n    }\n};\nexports.ClienteMapper = ClienteMapper;\nexports.ClienteMapper = ClienteMapper = __decorate([\n    (0, common_1.Injectable)()\n], ClienteMapper);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/cliente.mapper.ts?");

/***/ }),

/***/ "./src/clientes/cliente.repository.ts":
/*!********************************************!*\
  !*** ./src/clientes/cliente.repository.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClientesRepository = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst typeorm_2 = __webpack_require__(/*! typeorm */ \"typeorm\");\nconst cliente_entity_1 = __webpack_require__(/*! ./cliente.entity */ \"./src/clientes/cliente.entity.ts\");\nconst cliente_mapper_1 = __webpack_require__(/*! ./cliente.mapper */ \"./src/clientes/cliente.mapper.ts\");\nconst cliente_dto_1 = __webpack_require__(/*! ./cliente.dto */ \"./src/clientes/cliente.dto.ts\");\nlet ClientesRepository = class ClientesRepository {\n    constructor(clientesRepository, mapper) {\n        this.clientesRepository = clientesRepository;\n        this.mapper = mapper;\n    }\n    getAllClientes() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.clientesRepository.find();\n        });\n    }\n    getClienteById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.clientesRepository.findOneOrFail({ where: { id } });\n        });\n    }\n    addCliente(clienteDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const newCliente = this.mapper.dtoToEntity(clienteDTO);\n            return yield this.clientesRepository.save(newCliente);\n        });\n    }\n    updateCliente(id, clienteDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const updateClienteDTO = new cliente_dto_1.ClienteDTO(id, clienteDTO.nombre, clienteDTO.apellido, clienteDTO.tipo_doc, clienteDTO.nro_doc, clienteDTO.nro_tel_princ, clienteDTO.nro_tel_sec, clienteDTO.email);\n            const updateCliente = this.mapper.dtoToEntity(updateClienteDTO);\n            yield this.clientesRepository.update(id, updateCliente);\n            return yield this.getClienteById(id);\n        });\n    }\n};\nexports.ClientesRepository = ClientesRepository;\nexports.ClientesRepository = ClientesRepository = __decorate([\n    (0, common_1.Injectable)(),\n    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.ClienteEntity)),\n    __metadata(\"design:paramtypes\", [typeorm_2.Repository,\n        cliente_mapper_1.ClienteMapper])\n], ClientesRepository);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/cliente.repository.ts?");

/***/ }),

/***/ "./src/clientes/clientes.controller.ts":
/*!*********************************************!*\
  !*** ./src/clientes/clientes.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClientesController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst clientes_service_1 = __webpack_require__(/*! ./clientes.service */ \"./src/clientes/clientes.service.ts\");\nlet ClientesController = class ClientesController {\n    constructor(clientesService) {\n        this.clientesService = clientesService;\n    }\n    getAllClientes() {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.clientesService.getAllClientes();\n        });\n    }\n    getClienteById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.clientesService.getClienteById(id);\n        });\n    }\n    addCliente(cliente) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.clientesService.addCliente(cliente);\n        });\n    }\n    updateCliente(id, cliente) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return yield this.clientesService.updateCliente(id, cliente);\n        });\n    }\n};\nexports.ClientesController = ClientesController;\n__decorate([\n    (0, common_1.Get)(),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", []),\n    __metadata(\"design:returntype\", Promise)\n], ClientesController.prototype, \"getAllClientes\", null);\n__decorate([\n    (0, common_1.Get)(':id'),\n    __param(0, (0, common_1.Param)('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number]),\n    __metadata(\"design:returntype\", Promise)\n], ClientesController.prototype, \"getClienteById\", null);\n__decorate([\n    (0, common_1.Post)(),\n    __param(0, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Function]),\n    __metadata(\"design:returntype\", Promise)\n], ClientesController.prototype, \"addCliente\", null);\n__decorate([\n    (0, common_1.Put)(':id'),\n    __param(0, (0, common_1.Param)('id')),\n    __param(1, (0, common_1.Body)()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number, Function]),\n    __metadata(\"design:returntype\", Promise)\n], ClientesController.prototype, \"updateCliente\", null);\nexports.ClientesController = ClientesController = __decorate([\n    (0, common_1.Controller)('clientes'),\n    __metadata(\"design:paramtypes\", [clientes_service_1.ClienteService])\n], ClientesController);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/clientes.controller.ts?");

/***/ }),

/***/ "./src/clientes/clientes.module.ts":
/*!*****************************************!*\
  !*** ./src/clientes/clientes.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClientesModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst cliente_entity_1 = __webpack_require__(/*! ./cliente.entity */ \"./src/clientes/cliente.entity.ts\");\nconst clientes_controller_1 = __webpack_require__(/*! ./clientes.controller */ \"./src/clientes/clientes.controller.ts\");\nconst clientes_service_1 = __webpack_require__(/*! ./clientes.service */ \"./src/clientes/clientes.service.ts\");\nconst cliente_mapper_1 = __webpack_require__(/*! ./cliente.mapper */ \"./src/clientes/cliente.mapper.ts\");\nconst cliente_repository_1 = __webpack_require__(/*! ./cliente.repository */ \"./src/clientes/cliente.repository.ts\");\nlet ClientesModule = class ClientesModule {\n};\nexports.ClientesModule = ClientesModule;\nexports.ClientesModule = ClientesModule = __decorate([\n    (0, common_1.Module)({\n        imports: [typeorm_1.TypeOrmModule.forFeature([cliente_entity_1.ClienteEntity])],\n        controllers: [clientes_controller_1.ClientesController],\n        providers: [clientes_service_1.ClienteService, cliente_mapper_1.ClienteMapper, cliente_repository_1.ClientesRepository]\n    })\n], ClientesModule);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/clientes.module.ts?");

/***/ }),

/***/ "./src/clientes/clientes.service.ts":
/*!******************************************!*\
  !*** ./src/clientes/clientes.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ClienteService = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst cliente_repository_1 = __webpack_require__(/*! ./cliente.repository */ \"./src/clientes/cliente.repository.ts\");\nconst cliente_mapper_1 = __webpack_require__(/*! ./cliente.mapper */ \"./src/clientes/cliente.mapper.ts\");\nlet ClienteService = class ClienteService {\n    constructor(clientesRepository, mapper) {\n        this.clientesRepository = clientesRepository;\n        this.mapper = mapper;\n    }\n    getAllClientes() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const clientes = yield this.clientesRepository.getAllClientes();\n            return clientes.map((cliente) => this.mapper.entityToDto(cliente));\n        });\n    }\n    getClienteById(id) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const cliente = yield this.clientesRepository.getClienteById(id);\n            return this.mapper.entityToDto(cliente);\n        });\n    }\n    addCliente(clienteDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const newCliente = yield this.clientesRepository.addCliente(clienteDTO);\n            return this.mapper.entityToDto(newCliente);\n        });\n    }\n    updateCliente(id, clienteDTO) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const updateCliente = yield this.clientesRepository.updateCliente(id, clienteDTO);\n            return this.mapper.entityToDto(updateCliente);\n        });\n    }\n};\nexports.ClienteService = ClienteService;\nexports.ClienteService = ClienteService = __decorate([\n    (0, common_1.Injectable)(),\n    __metadata(\"design:paramtypes\", [cliente_repository_1.ClientesRepository,\n        cliente_mapper_1.ClienteMapper])\n], ClienteService);\n\n\n//# sourceURL=webpack://ts-demo/./src/clientes/clientes.service.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nfunction bootstrap() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const app = yield core_1.NestFactory.create(app_module_1.AppModule);\n        const options = new swagger_1.DocumentBuilder()\n            .setTitle('Nest Worshop')\n            .setDescription('Nest Worshop')\n            .setVersion('1.0')\n            .build();\n        const document = swagger_1.SwaggerModule.createDocument(app, options);\n        swagger_1.SwaggerModule.setup('api', app, document);\n        yield app.listen(3000);\n    });\n}\nvoid bootstrap();\n\n\n//# sourceURL=webpack://ts-demo/./src/index.ts?");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;