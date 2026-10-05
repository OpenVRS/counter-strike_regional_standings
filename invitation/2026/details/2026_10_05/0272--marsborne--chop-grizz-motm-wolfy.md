### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, motm, WolfY<br />
Global Rank: [272](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [61]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  607.8<br />
<br />
Final Rank Value (607.8) = Starting Rank Value (607.0) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 607.0
- 400 + ( ( 0.104 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 607.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5055 | 2026-04-28 | Chicken Coop   | L   | 0.135      | -            | -                | -                | -         |    -0.98 | chop, Grizz, Lucid, motm, WolfY |
|            5 |     5088 | 2026-04-27 | insane players | W   | 0.129      | 0.363        | 0.001 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.02 | chop, Grizz, Lucid, motm, WolfY |
|            4 |     5134 | 2026-04-26 | Reign Above    | L   | 0.122      | -            | -                | -                | -         |    -2.33 | chop, Grizz, Lucid, motm, WolfY |
|            3 |     5494 | 2026-04-14 | Voca           | W   | 0.043      | 0.333        | 0.022 (0.000)    | 0.533 (0.008)    | 0 (0.000) |     1.27 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     5515 | 2026-04-13 | Aether         | W   | 0.035      | 0.333        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.52 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     5560 | 2026-04-11 | insane players | W   | 0.021      | 0.333        | 0.001 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.34 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($213.65)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.043 | $5,000.00      | $213.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
