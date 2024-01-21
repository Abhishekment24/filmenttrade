import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
export const SkeletonDefaultProps = (props) => ({
    baseColor: "#26282B", inline: true, borderRadius: 10, duration: 1.5, highlightColor: "#444", containerClassName: "flex justify-between", ...props
})
function SkeletonLoader({ height = 30, width = "100%", count = 1 }) {
    return (
        <SkeletonTheme baseColor="#26282B" inline={true} width={width} borderRadius={10} height={height} duration={1.5} highlightColor="#444">

            <Skeleton count={count} />



        </SkeletonTheme>
    )
}
export const SingleSkeleton = ({ circle = false, inline = false, containerClassName = "", borderRadius = 10, height = 30, width = "100%", count = 1 }) => {
    return <Skeleton containerClassName={containerClassName} circle={circle} count={count} baseColor="#26282B" inline={inline} width={width} borderRadius={borderRadius} height={height} duration={1.5} highlightColor="#444" />
}

export default SkeletonLoader