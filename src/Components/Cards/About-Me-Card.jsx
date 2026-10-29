import { LuCode, LuArrowUpRight } from "react-icons/lu";
import "../../Styles/Components/Cards.css";

function StatCard({
    count,
    title,
    description,
    Icon = LuCode,
}) {
    return (
        <div
            data-aos="fade-right"
            data-aos-duration="1300"
            className="stat-card-wrapper"
        >
            <div className="stat-card">
                <div className="stat-card__gradient"></div>

                <div className="stat-card__header">
                    <div className="stat-card__icon-wrapper">
                        <Icon className="stat-card__icon" />
                    </div>

                    <span
                        className="stat-card__count"
                        data-aos="fade-up-left"
                        data-aos-duration="1500"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {count}
                    </span>
                </div>

                <div className="stat-card__content">
                    <p
                        className="stat-card__title"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-anchor-placement="top-bottom"
                    >
                        {title}
                    </p>

                    <div className="stat-card__footer">
                        <p
                            className="stat-card__description"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {description}
                        </p>

                        <LuArrowUpRight className="stat-card__arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatCard;