import * as flsFunctions from './modules/functions.js'
import { swipersInit } from './modules/swiper.js'
import { rangeInit } from "./modules/range.js";
import { likeInit } from "./modules/like.js";
import { filterInit } from "./modules/filter.js";
import { burgerInit } from "./modules/burger.js";
import { backLink } from "./modules/backLink.js";

flsFunctions.isWebp()
swipersInit()
rangeInit()
likeInit()
filterInit()
burgerInit();
backLink()