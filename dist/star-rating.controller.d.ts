export declare type starRatingSizes = "small" | "medium" | "large";
export declare type starRatingColors = "negative" | "middle" | "positive";
export declare type starRatingSpeed = "immediately" | "noticeable" | "slow";
export declare type starRatingPosition = "left" | "right" | "top" | "bottom";
export declare type starRatingStarTypes = "svg" | "icon" | "image";
export interface IStarRatingCompBindings {
    id?: string;
    text?: string;
    color?: starRatingColors;
    labelPosition?: starRatingPosition;
    speed?: starRatingSpeed;
    size?: starRatingSizes;
    starType?: starRatingStarTypes;
    spread?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    rating?: number;
    numOfStars?: number;
    getColor?: Function;
    onClick?: Function;
    onUpdate?: Function;
}
export declare class StarRatingController implements IStarRatingCompBindings {
    static DefaultClassEmpty: string;
    static DefaultClassFilled: string;
    static DefaultNumOfStars: number;
    static DefaultSize: starRatingSizes;
    static DefaultSpeed: starRatingSpeed;
    static DefaultLabelPosition: starRatingPosition;
    static DefaultStarType: starRatingStarTypes;
    static DefaultAssetsPath: string;
    static DefaultSvgPath: string;
    static DefaultSvgEmptySymbolId: string;
    static DefaultSvgFilledSymbolId: string;
    static DefaultSvgPathEmpty: string;
    static DefaultSvgPathFilled: string;
    /**
     * getStarsArray
     *
     * returns an array of increasing numbers starting at 1
     *
     * @param numOfStars
     * @returns {Array}
     */
    private static getStarsArray(numOfStars);
    id: string;
    text: string;
    color: starRatingColors;
    labelPosition: starRatingPosition;
    speed: starRatingSpeed;
    size: starRatingSizes;
    starType: starRatingStarTypes;
    spread: boolean;
    readOnly: boolean;
    disabled: boolean;
    rating: number;
    numOfStars: number;
    getColor: Function;
    onClick: Function;
    onUpdate: Function;
    classEmpty: string;
    classFilled: string;
    pathEmpty: string;
    pathFilled: string;
    stars: Array<number>;
    staticColor: starRatingColors;
    constructor();
    /**
     * $onChanges
     *
     *The components $onChange hook
     *
     * @param changes
     */
    $onChanges(changes: any): void;
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it calls the custom onClick
     * handler with the actual rating value.
     *
     * @param rating
     */
    onStarClicked(rating: number): void;
    /**
     * updateRating
     *
     * Used to set the rating value and update other variables
     * based on rating. This function also triggers the onUpdate emitter.
     *
     * @param value
     */
    private updateRating(value);
    /**
     * updateNumOfStars
     *
     * Used to set the numOfStars value and update other variables
     * based on numOfStars.
     *
     * @param {number} numOfStars the number of stars
     */
    private updateNumOfStars(numOfStars);
    /**
     * calculateColor
     *
     * The default function for color calculation
     * based on the current rating and the the number of stars possible.
     * If a staticColor is set the function will use it as return value.
     *
     * @param rating
     * @param numOfStars
     * @param staticColor
     * @returns {starRatingColors}
     */
    private calculateColor;
}