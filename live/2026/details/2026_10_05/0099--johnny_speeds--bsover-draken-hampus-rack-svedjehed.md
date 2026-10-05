### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: bsover, draken, hampus, Rack, Svedjehed<br />
Global Rank: [99](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [72]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1049.2<br />
<br />
Final Rank Value (1049.2) = Starting Rank Value (1030.5) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.535[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1030.5
- 400 + ( ( 0.315 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1030.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       55 | 2026-10-02 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -2.34 | bsover, draken, hampus, Rack, Svedjehed |
|           13 |       68 | 2026-10-02 | MTX               | L   | 1.000      | -            | -                | -                | -         |   -29.67 | bsover, draken, hampus, Rack, Svedjehed |
|           12 |       87 | 2026-10-02 | FOKUS             | L   | 1.000      | -            | -                | -                | -         |    -6.00 | bsover, draken, hampus, Rack, Svedjehed |
|           11 |      101 | 2026-10-02 | JiJieHao          | L   | 1.000      | -            | -                | -                | -         |    -3.93 | bsover, draken, hampus, Rack, Svedjehed |
|           10 |      110 | 2026-10-02 | EAC EXTRA         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.034 (0.013)    | 1 (1.000) |     0.85 | bsover, draken, hampus, Rack, Svedjehed |
|            9 |      117 | 2026-10-02 | 9INE              | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.339 (0.126)    | 1 (1.000) |    17.90 | bsover, draken, hampus, Rack, Svedjehed |
|            8 |      647 | 2026-09-22 | BBL               | L   | 1.000      | -            | -                | -                | -         |    -4.28 | bsover, draken, hampus, Rack, Svedjehed |
|            7 |      669 | 2026-09-22 | Virtus.pro        | W   | 1.000      | 0.450        | 0.031 (0.014)    | 0.616 (0.277)    | 1 (1.000) |    25.52 | bsover, draken, hampus, Rack, Svedjehed |
|            6 |      679 | 2026-09-22 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -2.34 | bsover, draken, hampus, Rack, Svedjehed |
|            5 |     2445 | 2026-08-05 | Betclic           | L   | 0.792      | -            | -                | -                | -         |    -4.47 | bsover, draken, hampus, Rack, Svedjehed |
|            4 |     2468 | 2026-08-04 | G2 Ares           | W   | 0.785      | 0.450        | 0.010 (0.004)    | 0.731 (0.258)    | 1 (0.785) |     9.64 | bsover, draken, hampus, Rack, Svedjehed |
|            3 |     2479 | 2026-08-03 | Metizport         | W   | 0.781      | 0.450        | 0.037 (0.013)    | 0.659 (0.232)    | 1 (0.781) |    19.66 | bsover, draken, hampus, Rack, Svedjehed |
|            2 |     2488 | 2026-08-03 | Lilmix            | W   | 0.780      | 0.450        | 0.000 (0.000)    | 0.131 (0.046)    | 1 (0.780) |     2.68 | bsover, draken, hampus, Rack, Svedjehed |
|            1 |     2492 | 2026-08-03 | Metizport         | L   | 0.779      | -            | -                | -                | -         |    -4.49 | bsover, draken, hampus, Rack, Svedjehed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,766.06)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-26 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-08-05 |      0.794 | $6,000.00      | $4,766.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
