export const updObjInArrFollowUnfollow = (items, itemId, objectPropName, newObjectProps) => {
    return items.map(i => {
        if (i[objectPropName] === itemId) {
            return { ...i, ...newObjectProps}
        }
        return i;
    })
}