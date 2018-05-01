import { colors } from '@0xproject/react-shared';
import * as _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import * as React from 'react';
import * as DocumentTitle from 'react-document-title';

import { Footer } from 'ts/components/footer';
import { TopBar } from 'ts/components/top_bar/top_bar';
import { Dispatcher } from 'ts/redux/dispatcher';
import { ScreenWidths } from 'ts/types';
import { constants } from 'ts/utils/constants';
import { Translate } from 'ts/utils/translate';

export interface JobsProps {
    location: Location;
    translate: Translate;
    dispatcher: Dispatcher;
}

export const Jobs: React.StatelessComponent<JobsProps> = props => {
    return (
        <div>
            <DocumentTitle title="Jobs" />
            <TopBar
                blockchainIsLoaded={false}
                location={props.location}
                style={{ backgroundColor: colors.white, position: 'relative' }}
                translate={props.translate}
            />
            <Join0x />
            <Mission />
            <PhotoRail />
            <Values />
            <Benefits />
            <Teams />
            <OpenPositions />
            <Footer translate={props.translate} dispatcher={props.dispatcher} />
        </div>
    );
};

const Join0x = () => (
    <div className="clearfix center py4" style={{ backgroundColor: colors.white, color: colors.black }}>
        <div className="mx-auto inline-block align-middle py4" style={{ lineHeight: '44px', textAlign: 'center' }}>
            <div className="h2 sm-center sm-pt3" style={{ fontFamily: 'Roboto Mono' }}>
                Join 0x
            </div>
            <div
                className="pb2 lg-pt2 md-pt2 sm-pt3 sm-px3 h4 sm-center"
                style={{ fontFamily: 'Roboto', lineHeight: 2, maxWidth: 537 }}
            >
                0x is transforming the way that value is exchanged on a global scale. Come join us in San Francisco or
                work remotely anywhere in the world to help create the infrastructure of a new tokenized economy.
            </div>
            <div className="py3">
                <FlatButton
                    label={'view open positions'}
                    backgroundColor={colors.black}
                    labelStyle={{
                        fontSize: 18,
                        fontFamily: 'Roboto Mono',
                        fontWeight: 'lighter',
                        color: colors.white,
                        textTransform: 'lowercase',
                    }}
                    style={{ width: 280, height: 62, borderRadius: 5 }}
                />
            </div>
        </div>
    </div>
);

const Mission = () => {
    const isSmallScreen = false;
    return (
        <div className="container lg-py4 md-py4 sm-pb4 sm-pt2" style={{ backgroundColor: colors.grey100 }}>
            <div className="mx-auto clearfix">
                {!isSmallScreen && <TokenCloud />}
                <div
                    className="col lg-col-6 md-col-6 col-12 center"
                    style={{ color: colors.darkestGrey, height: 364, lineHeight: '364px' }}
                >
                    <div
                        className="mx-auto inline-block lg-align-middle md-align-middle sm-align-top"
                        style={{ maxWidth: 385, lineHeight: '44px', textAlign: 'center' }}
                    >
                        <div className="h2 sm-center sm-pt3" style={{ fontFamily: 'Roboto Mono' }}>
                            Our Mission
                        </div>
                        <div
                            className="pb2 lg-pt2 md-pt2 sm-pt3 sm-px3 h4 sm-center"
                            style={{ fontFamily: 'Roboto', lineHeight: 2, maxWidth: 537 }}
                        >
                            We believe a system can exist in which all world value is accessible to anyone, anywhere,
                            regardless of where you happen to be born.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TokenCloud = () => {
    const isSmallScreen = false;
    return (
        <div className="col lg-col-6 md-col-6 col-12 center">
            <img src="/images/jobs/map.png" height={isSmallScreen ? 280 : 364.5} />
        </div>
    );
};

const PhotoRail = () => {
    const images = ['/images/jobs/office1.png', '/images/jobs/office2.png', '/images/jobs/office3.png'];
    return (
        <div className="clearfix" style={{ height: 491 }}>
            {_.map(images, (image: string) => {
                return (
                    <div key={image} className="col lg-col-4 md-col-4 col-12 center" style={{ height: '100%' }}>
                        <FilledImage src={image} />
                    </div>
                );
            })}
        </div>
    );
};
const Values = () => {
    const isSmallScreen = false;
    const valueItemsColumn1: BulletedItemProps[] = [
        {
            bulletColor: '#6FCF97',
            title: 'Ethics/Doing the right thing',
            description:
                'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante vitae lacus condimentum auctor nec ut elit.',
        },
        {
            bulletColor: '#56CCF2',
            title: 'Clear communication',
            description:
                'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante vitae lacus condimentum auctor nec ut elit.',
        },
        {
            bulletColor: '#EB5757',
            title: 'Grow the whole pie',
            description:
                'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante vitae lacus condimentum auctor nec ut elit.',
        },
    ];
    const valueItemsColumn2: BulletedItemProps[] = [
        {
            bulletColor: '#F2994A',
            title: 'Crypto-Economic Technology',
            description:
                'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante vitae lacus condimentum auctor nec ut elit.',
        },
        {
            bulletColor: '#E0E0E0',
            title: 'Transparency',
            description:
                'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante vitae lacus condimentum auctor nec ut elit.',
        },
        {
            bulletColor: '#F2C94C',
            title: 'Positive Energy',
            description:
                'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante vitae lacus condimentum auctor nec ut elit.',
        },
    ];
    return (
        <div className="clearfix lg-py4 md-py4 sm-pb4 sm-pt2" style={{ backgroundColor: colors.white }}>
            <div className="mx-auto max-width-4 clearfix">
                <div className="col lg-col-6 md-col-6 col-12 p2">
                    {_.map(valueItemsColumn1, bulletedItemProps => {
                        return (
                            <BulletedItem
                                bulletColor={bulletedItemProps.bulletColor}
                                title={bulletedItemProps.title}
                                description={bulletedItemProps.description}
                            />
                        );
                    })}
                </div>
                <div className="col lg-col-6 md-col-6 col-12 p2">
                    {_.map(valueItemsColumn2, bulletedItemProps => {
                        return (
                            <BulletedItem
                                bulletColor={bulletedItemProps.bulletColor}
                                title={bulletedItemProps.title}
                                description={bulletedItemProps.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const Benefits = () => (
    <div className="flex" style={{ height: 937 }}>
        <div style={{ width: '43%', height: '100%' }}>
            <div className="flex" style={{ height: '67%' }}>
                <FilledImage src="/images/jobs/location1.png" />
            </div>
            <div className="clearfix" style={{ height: '33%' }}>
                <div className="col lg-col-6 md-col-6 col-12" style={{ height: '100%' }}>
                    <FilledImage src="/images/jobs/location2.png" />
                </div>
                <div className="col lg-col-6 md-col-6 col-12" style={{ height: '100%' }}>
                    <FilledImage src="/images/jobs/location3.png" />
                </div>
            </div>
        </div>
        <div style={{ width: '57%', height: '100%' }} />
    </div>
);
const Teams = () => {
    const isSmallScreen = false;
    const teamItemsColumn1: BulletedItemProps[] = [
        {
            bulletColor: '#EB5757',
            title: 'User Growth',
            description:
                'Donec eget auctor mauris, a imperdiet ante. Ut a tellus ullamcorper, pharetra nibh sed, dignissim mauris. Quisque vel magna vitae nisi scelerisque commodo sed eget dolor. Maecenas vehicula orci',
        },
        {
            bulletColor: '#EB5757',
            title: 'Governance',
            description:
                'Donec eget auctor mauris, a imperdiet ante. Ut a tellus ullamcorper, pharetra nibh sed, dignissim mauris. Quisque vel magna vitae nisi scelerisque commodo sed eget dolor. Maecenas vehicula orci',
        },
    ];
    const teamItemsColumn2: BulletedItemProps[] = [
        {
            bulletColor: '#EB5757',
            title: 'Developer Tools',
            description:
                'Donec eget auctor mauris, a imperdiet ante. Ut a tellus ullamcorper, pharetra nibh sed, dignissim mauris. Quisque vel magna vitae nisi scelerisque commodo sed eget dolor. Maecenas vehicula orci',
        },
        {
            bulletColor: '#EB5757',
            title: 'Marketing',
            description:
                'Donec eget auctor mauris, a imperdiet ante. Ut a tellus ullamcorper, pharetra nibh sed, dignissim mauris. Quisque vel magna vitae nisi scelerisque commodo sed eget dolor. Maecenas vehicula orci',
        },
    ];
    const teamHeight = 220;
    return (
        <div className="clearfix lg-py4 md-py4 sm-pb4 sm-pt2" style={{ backgroundColor: colors.white }}>
            <div className="mx-auto max-width-4 clearfix">
                <div className="col lg-col-6 md-col-6 col-12 p2">
                    {_.map(teamItemsColumn1, bulletedItemProps => {
                        return (
                            <BulletedItem
                                bulletColor={bulletedItemProps.bulletColor}
                                title={bulletedItemProps.title}
                                description={bulletedItemProps.description}
                                height={teamHeight}
                            />
                        );
                    })}
                </div>
                <div className="col lg-col-6 md-col-6 col-12 p2">
                    {_.map(teamItemsColumn2, bulletedItemProps => {
                        return (
                            <BulletedItem
                                bulletColor={bulletedItemProps.bulletColor}
                                title={bulletedItemProps.title}
                                description={bulletedItemProps.description}
                                height={teamHeight}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
const OpenPositions = () => {
    const positions = [
        {
            name: 'Community Director',
            department: 'Marketing',
            office: 'Remote / San Francisco',
        },
        {
            name: 'Data Scientist / Data Engineer',
            department: 'Engineering',
            office: 'Remote / San Francisco',
        },
        {
            name: 'Executive Assitant / Office Manager',
            department: 'Operations',
            office: 'Remote / San Francisco',
        },
        {
            name: 'Research Fellow - Economics / Governance',
            department: 'Engineering',
            office: 'Remote / San Francisco',
        },
        {
            name: 'Software Engineer - Blockchain',
            department: 'Engineer',
            office: 'Remote / San Francisco',
        },
        {
            name: 'Software Engineer - Full-stack',
            department: 'Marketing',
            office: 'Remote / San Francisco',
        },
    ];
    const labelStyle = { fontFamily: 'Roboto Mono', fontSize: 18 };
    return (
        <div className="py4" style={{ paddingLeft: 200, paddingRight: 200 }}>
            <Table selectable={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn colSpan={6} style={labelStyle}>
                            Position
                        </TableHeaderColumn>
                        <TableHeaderColumn colSpan={3} style={labelStyle}>
                            Department
                        </TableHeaderColumn>
                        <TableHeaderColumn colSpan={3} style={labelStyle}>
                            Office
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} showRowHover={true}>
                    {_.map(positions, position => {
                        return (
                            <TableRow hoverable={true} displayBorder={false} style={{ height: 100, border: 2 }}>
                                <TableRowColumn colSpan={6} style={labelStyle}>
                                    {position.name}
                                </TableRowColumn>
                                <TableRowColumn colSpan={3} style={labelStyle}>
                                    {position.department}
                                </TableRowColumn>
                                <TableRowColumn colSpan={3} style={labelStyle}>
                                    {position.office}
                                </TableRowColumn>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

interface BulletedItemProps {
    bulletColor: string;
    title: string;
    description: string;
    height?: number;
}
const BulletedItem = (props: BulletedItemProps) => {
    const height = props.height || 150;
    return (
        <div className="flex" style={{ height }}>
            <svg className="flex-none px2" height="26" width="26">
                <circle cx="13" cy="13" r="13" fill={props.bulletColor} />
            </svg>
            <div className="flex-auto px2">
                <div style={{ paddingTop: 3, fontWeight: 'bold', fontSize: 16 }}>{props.title}</div>
                <div style={{ paddingTop: 12, fontSize: 16, lineHeight: 2 }}>{props.description}</div>
            </div>
        </div>
    );
};

interface FilledImageProps {
    src: string;
}
const FilledImage = (props: FilledImageProps) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundImage: `url(${props.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}
    />
);
